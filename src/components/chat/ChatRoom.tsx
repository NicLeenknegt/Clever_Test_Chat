import React from 'react';
import './ChatRoom.css'
import Message from './message/Message'
import { ChatState, MessageType } from '../../redux/message/types';
import { connect } from 'react-redux';
import { AppState } from '../../redux';
import {thunkStartConversation} from "../../redux/message/thunk"

interface ChatRoomProps {
    chat:ChatState;
    thunkStartConversation: any;
}

class ChatRoom extends React.Component<ChatRoomProps> {
    private scrollPoint:React.RefObject<HTMLDivElement> = React.createRef();
    state = {
        messages:[]
    }

    componentDidMount() {
        this.props.thunkStartConversation("Hallo", {
            message:"none"
        } )
    }

    componentDidUpdate() {
        if (this.scrollPoint.current !== null && this.props.chat.selectedMessage === this.props.chat.messages[this.props.chat.messages.length - 1]) 
            this.scrollPoint.current.scrollIntoView({behavior:"smooth"})
        
    }

    public render() {
        console.log(this.props.chat.messages)
        return (
            <div className="message_container">
               {this.props.chat.messages.map( 
                   (message:MessageType, index:number) => {
                        if (message !== undefined)
                            return (<Message index={index} key={index} message={this.props.chat.messages[index]} renderType={message.renderType}/>)
                    }  
                )}
                <div ref={this.scrollPoint} ></div>
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