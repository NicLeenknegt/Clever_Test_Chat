import React from 'react';
import './ChatRoom.css'
import {Message} from './Message'

export class ChatRoom extends React.Component {

    public render() {
        return (
            <div className="message_container">
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>

            </div>
        )
    }
}