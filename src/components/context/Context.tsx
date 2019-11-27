import React from "react";
import { ChatState } from "../../redux/message/types";
import { AppState } from "../../redux";
import { connect } from "react-redux";
import './Context.css'
import { TableContainer } from "../table_container/TableContainer";
import { Variable, ContextModel } from "../../domain/Context/Context";

interface ContextProps {
    chat: ChatState
}

interface contextState {
    searchFilter: string,
    showEmptyValues: boolean,
    selectedType:string

}

class Context extends React.Component<ContextProps, contextState> {
    private allTypes:string = "All types"
    contexts: ContextModel[] = []

    /**
     *
     */
    constructor(props: ContextProps) {
        super(props);
        this.state = {
            searchFilter: "",
            showEmptyValues: false,
            selectedType: this.allTypes
        }
    }

    private defaultScreen() {
        return (
            <div className="default_container">
                <p>
                    NO CONTEXT AVAILABLE
                </p>
            </div>
        )
    }

    public createContext() {
        var variables: Variable[] = []
        if (this.props.chat.selectedMessage.context !== undefined) {
            this.props.chat.selectedMessage.context.variables.forEach((variable: any) => {
                variables.push(
                    new Variable().fromJson(variable)
                )
            })
        }



        variables = variables.sort((a: Variable, b: Variable) => {
            if (a.value === "" && b.value !== "") {
                return 1;
            }

            if (a.value !== "" && b.value === "") {
                return -1;
            }

            if (a.value === "" && b.value === "") {
                if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
                    return 1;
                }

                if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
                    return -1;
                }
                return 0
            }
            if (a.value !== "" && b.value !== "") {
                if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
                    return 1;
                }

                if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
                    return -1;
                }
                return 0
            }

            return 0
        })

        if (this.state.searchFilter !== "")
            variables = variables.filter((value: Variable) => { return value.name.toLocaleLowerCase().includes(this.state.searchFilter) })

        if (!this.state.showEmptyValues)
            variables = variables.filter((value: Variable) => { return value.value !== "" })

        if (this.state.selectedType !== this.allTypes) 
            variables = variables.filter((value: Variable) => { return value.type === this.state.selectedType })


        return variables
    }

    private createTypes():string[] {
        let types:string[] = []
        if (this.props.chat.selectedMessage !== undefined && this.props.chat.selectedMessage.context !== undefined) {
            types = this.props.chat.selectedMessage.context.variables
                .map((value:any) => {return value.contextType})
            types = types.filter((value:string, index:number) => {return types.indexOf(value) === index})
        }
        return types
    }

    public render() {
        let variables:Variable[] = this.createContext();
      

        if (this.props.chat.selectedMessage.context !== undefined)
            return (
                <div className="context_container">
                    <div className="context_settings">
                        <input type="search" className="context_search_bar" onChange={(e) => { this.setState({ searchFilter: e.target.value.toLocaleLowerCase() }) }} />
                        <div className="context_checkbox">
                            <input type="checkbox" checked={this.state.showEmptyValues} id="show_empty_values" onChange={() => {
                                this.setState({
                                    showEmptyValues: !this.state.showEmptyValues
                                })
                            }} />
                            <label htmlFor="show_empty_values">SHOW EMPTY VALUES</label>
                        </div>
                        <div className="context_select">
                            <p>
                                TYPE:
                            </p>
                            <select onChange={(e) => { this.setState({
                                selectedType:e.target.value
                            }) }}>
                                <option key={0} value={this.allTypes}>{this.allTypes}</option>
                                {
                                    this.createTypes().map((value:string, index:number) => {
                                        return <option key={index++} value={value}>{value}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="context_table">
                        <TableContainer rows={variables} type={Variable} />
                    </div>
                </div>
            )
        return this.defaultScreen()
    }
}

const mapStateToProps = (state: AppState) => ({
    chat: state.message
});

export default connect(
    mapStateToProps
)(Context);