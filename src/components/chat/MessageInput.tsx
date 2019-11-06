import React from 'react';
import './MessageInput.css'
import { addMessage } from '../../redux/message/action'
import { thunkSendMessage } from '../../redux/message/thunk'
import { ChatState } from '../../redux/message/types'
import { connect } from 'react-redux';
import { UserTextMessage, Text } from '../../domain/Messages/TextMessage';
import { AppState } from '../../redux';


type MessageInputState  = {
    input:string
}

interface MessageInputProps {
    chat:ChatState
    thunkSendMessage: any;
}

class MessageInput extends React.Component<MessageInputProps> {

    state = {
        message: ""
    } 

    private updateInput(input:string) {
        this.setState({
            message:input
        })
    }

    private handleKeyDown(e:React.KeyboardEvent<HTMLInputElement>) {
        if (e.key == 'Enter') {
            this.handleAddMessage()
        }
    }

    private handleAddMessage() {
        if (this.state.message.trim() !== "") {
            this.props.thunkSendMessage(
                new UserTextMessage({
                    messages: [
                        new Text(this.state.message)
                    ],
                    context: this.props.chat.messages[this.props.chat.messages.length - 1].context                
                })
                ) 
        }
        this.setState({
            message:""
        });
    }

    public render() {
        return (<div className="input_field">
            <div className="text_input_wrapper">
                <input className="input" 
                    placeholder="Type your message" 
                    type="text" 
                    onKeyDown={e => this.handleKeyDown(e)}
                    value={this.state.message}
                    onChange={e => this.updateInput(e.target.value)}/>
                <span className="underline"></span>
            </div>
            <button className="send_button" onClick={e => this.handleAddMessage()}>
                Versturen
            </button>
        </div>)
    }
}

const mapStateToProps = (state:AppState) => ({
    chat:state.message
})

export default connect(
    mapStateToProps,
    { thunkSendMessage }
)(MessageInput);