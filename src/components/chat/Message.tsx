import React from 'react';
import './Message.css'
import { MessageType } from '../../redux/message/types';
import {UserTextMessage} from '../../domain/Messages/TextMessage'
import { ErrorMesage } from '../../domain/Messages/ErrorMessage';
import { ImageMessage } from '../../domain/Messages/ImageMessage';
interface MessageProps {
    message:MessageType,
    renderType:String
}

export class Message extends React.Component<MessageProps> {

    private renderMessage() {
        return (
            <div className={this.props.renderType === "USER_TEXT"?"user_message":"bot_message"}>
                {(this.props.message as UserTextMessage).messages[0].text}
            </div>
        )
    }

    private renderError() {
        return (
            <div className="error_message">
                {(this.props.message as ErrorMesage).error}
            </div>
        )
    }

    private renderImage() {
        var message = this.props.message as ImageMessage
        var images = []
        for (var index in message.images) {
            var image = message.images[index]
            images.push(
                <div className="image_container">
                    <img className="image_message" src={image.url} />
                    <div className="link_container">
                        <a href={image.url}>{image.url}</a>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <div className="bot_message">
                    {message.question}
                </div>
                {images}
            </div>
            
        )
    }

    private renderLoading() {
        return (
            <div className="loading_message"><div></div><div></div></div>
        )
    }

    private renderSelector() {
        if (this.props.renderType === "LOADING") {
            return this.renderLoading()
        } else {
            if (this.props.renderType === "IMAGE")
                return this.renderImage()
            if (this.props.renderType === "ERROR")
                return this.renderError()
            return this.renderMessage()
        }
    }

    public render() {
        return (
            <div className="message_row">
               {this.renderSelector()}
            </div>
        )
    }
}  