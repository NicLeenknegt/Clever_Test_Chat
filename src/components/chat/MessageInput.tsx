import React from 'react';
import './MessageInput.css'
export class MessageInput extends React.Component {
    public render() {
        return (<div className="input_field">
            <div className="text_input_wrapper">
                <input className="input" placeholder="Type your message" type="text"/>
                <span className="underline"></span>
            </div>
            <button className="send_button">
                Versturen
            </button>
        </div>)
    }
}