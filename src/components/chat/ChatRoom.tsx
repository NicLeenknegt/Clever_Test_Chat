import React from 'react';
import './ChatRoom.css'
import {Message} from './Message'
import { ChatState, MessageType } from '../../redux/message/types';
import { connect } from 'react-redux';
import { AppState } from '../../redux';
import {thunkStartConversation} from "../../redux/message/thunk"

interface ChatRoomProps {
    chat:ChatState;
    thunkStartConversation: any;
}

class ChatRoom extends React.Component<ChatRoomProps> {
    state = {
        messages:[]
    }
    
    componentDidMount() {
        this.props.thunkStartConversation("Hallo", {
            message:"none"
        } )
    }

    public render() {
        console.log(this.props.chat.messages)
        return (
            <div className="message_container">
               {this.props.chat.messages.map( 
                   (message:MessageType, index:number) => {
                    if (message !== undefined)
                            return (<Message key={index} message={this.props.chat.messages[index]} renderType={message.renderType}/>)
                    }  
                )}
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    chat: state.message
});

export default connect(
    mapStateToProps,
    { thunkStartConversation }
)(ChatRoom);