import React from 'react';
import './ChatContainer.css'
import {MessageInput} from './MessageInput'
import {ChatRoom} from './ChatRoom'

export class ChatContainer extends React.Component {
 
    public render() {
        return (
            <div className="chat_container">
                <ChatRoom/>
                <MessageInput/>
            </div>
        )
    }
 } 