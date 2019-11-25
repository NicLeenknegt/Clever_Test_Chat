import React, { ReactElement } from "react";
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
    searchFilter:string
}

class Context extends React.Component<ContextProps, contextState> {

    contexts: ContextModel[] = []

    /**
     *
     */
    constructor(props:ContextProps) {
        super(props);
        this.state = {
            searchFilter:""
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
                console.log(variable)
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
            variables = variables.filter((value:Variable) => {return value.name.toLocaleLowerCase().includes(this.state.searchFilter)})

        return variables
    }

    public render() {
        if (this.props.chat.selectedMessage.context !== undefined)
            return (
                <div className="context_container">
                    <div className="context_settings">
                        <input type="search" className="context_search_bar" onChange={(e) => {this.setState({searchFilter:e.target.value.toLocaleLowerCase()})}} />
                    </div>
                    <div className="context_table">
                        <TableContainer rows={this.createContext()} type={Variable} />
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