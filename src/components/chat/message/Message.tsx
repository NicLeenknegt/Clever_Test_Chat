import React, { ReactElement } from 'react';
import './Message.css'
import { MessageType, ChatState } from '../../../redux/message/types';
import { UserTextMessage, Text } from '../../../domain/Messages/TextMessage'
import { thunkSendMessage } from '../../../redux/message/thunk'
import { selectMessage } from '../../../redux/message/action'
import { connect } from 'react-redux';
import { RenderFactory } from '../../../utils/render_factory/RenderFactory';
import { AppState } from '../../../redux';
interface MessageProps {
    index: number,
    chat: ChatState,
    message: MessageType,
    renderType: String,
    thunkSendMessage: any,
    selectMessage: typeof selectMessage
}

class Message extends React.Component<MessageProps, { border: string }> {

    /**
     *
     */
    constructor(props: MessageProps) {
        super(props);
        this.state = {
            border: "none"
        }
    }

    private handleClick(e: any) {
        if ((e.target as HTMLInputElement).type === "radio")
            return;
        if ((e.target as HTMLButtonElement).value !== undefined) {
            this.props.thunkSendMessage(
                new UserTextMessage({
                    messages: [
                        new Text((e.target as HTMLButtonElement).value)
                    ],
                    context: this.props.message.context
                })
            )
        }
    }


    private renderResultNodes(): ReactElement[] {
        var context = this.props.message.context
        var reactElements: ReactElement[] = []
        if (context !== undefined && context.resultNodes !== undefined && this.props.message.renderType !== "USER_TEXT") {
            
            if (Array.isArray(context.resultNodes)) {
                (context.resultNodes as any[]).forEach((node: any, index: number) => {
                    reactElements.push(
                        <div key={index} className="result_node_container">
                            {node.name}
                        </div>
                    )
                }
                )
            } else {
                reactElements.push(
                    <div key={0} className="result_node_container">
                        {context.resultNodes.name}
                    </div>
                )

            }

        }
        return reactElements
    }

    public render() {
        return (
            <div id="message_row" key={this.props.chat.messages.indexOf(this.props.chat.selectedMessage)} onClick={e => this.handleClick(e)} style={{ border: this.props.chat.selectedMessage === this.props.message ? "solid 3px rgb(60, 0, 120,0.5)" : "solid 3px transparent" }} >
                <div className="message_row_container">
                    {
                        new RenderFactory()
                            .setInput(this.props.message)
                            .select()
                            .build()
                    }
                    {this.renderResultNodes()}
                </div>

                <div className="check_box_container">
                    <input className="check_box" type="radio" name="select_message" checked={this.props.chat.selectedMessage === this.props.message} onChange={e => this.props.selectMessage(this.props.message)} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    chat: state.message
});

export default connect(
    mapStateToProps,
    { thunkSendMessage, selectMessage }
)(Message);