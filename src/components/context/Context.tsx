import React, { ReactElement } from "react";
import { ChatState } from "../../redux/message/types";
import { AppState } from "../../redux";
import { connect } from "react-redux";
import './Context.css'
import { TableContainer } from "../table_container/TableContainer";
import { Variable } from "../../domain/Context/Context";

interface ContextProps {
    chat: ChatState
}

class Context extends React.Component<ContextProps> {

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
        var variables:Variable[] = []
        if (this.props.chat.selectedMessage.context !== undefined) {
            this.props.chat.selectedMessage.context.variables.forEach((variable:any) => {
                variables.push(
                    new Variable().fromJson(variable)
                )
            })

        }
        return variables
    }

    public render() {
        if (this.props.chat.selectedMessage.context !== undefined)
            return (
                <TableContainer rows={this.createContext()} type={Variable} />
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