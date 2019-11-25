import React, { ReactElement, ReactComponentElement } from 'react';
import './ChatRoom.css'
import Message from './message/Message'
import { ChatState, MessageType } from '../../redux/message/types';
import { connect } from 'react-redux';
import { AppState } from '../../redux';
import { thunkStartConversation } from "../../redux/message/thunk"

interface ChatRoomProps {
    chat: ChatState;
    thunkStartConversation: any;
}

class ChatRoom extends React.Component<ChatRoomProps> {
    private scrollPoint: React.RefObject<HTMLDivElement> = React.createRef();
    private reactElements:ReactElement[] = []
    private elements:MessageType[] = []
    /**
     *
     */
    constructor(props: ChatRoomProps) {
        super(props);

    }

    componentDidMount() {
        this.props.thunkStartConversation("Hallo", {
            message: "none"
        })
    }

    componentDidUpdate() {
        if (this.scrollPoint.current !== null && this.props.chat.selectedMessage === this.props.chat.messages[this.props.chat.messages.length - 1])
            this.scrollPoint.current.scrollIntoView({ behavior: "smooth" })
        
    }

    public render() {
        var currentElements = this.elements;
        currentElements = currentElements.filter((message) => message.renderType != "LOADING")
        if (this.props.chat.messages.length < currentElements.length){
            this.reactElements = []
            this.elements = []
        }
        if (this.props.chat.messages.length > currentElements.length) {
            console.log(this.props.chat.messages)
            this.props.chat.messages.slice(currentElements.length, this.props.chat.messages.length).forEach(
                (message: MessageType) => {
                    if (message !== undefined) {
                        var index = this.props.chat.messages.indexOf(message)
                        this.elements.forEach((value:MessageType) => {
                            this.reactElements.splice(index, 1)
                        })

                        this.reactElements.push(<Message index={index} key={index} message={message} renderType={message.renderType} />)
                        this.elements.filter((message) => message.renderType != "LOADING")
                        this.elements.push(message)
                    }
                })
        }
        return (
            <div className="message_container">
                {this.reactElements.map((value: ReactElement) => { return value })}
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