import React from 'react';
import './ChatContainer.css'
import MessageInput from './MessageInput'
import ChatRoom from './ChatRoom'
import { connect } from 'react-redux';
import { thunkStartConversation } from "../../redux/message/thunk";
import { ChatState } from '../../redux/message/types';
import { AppState } from '../../redux';
import { isTesting } from '../../redux/message/action';

interface ChatContainerProps {
    chat: ChatState,
    isTesting: typeof isTesting,
    thunkStartConversation: any
}

interface ChatContainerState {
    animating: boolean
} 

class ChatContainer extends React.Component<ChatContainerProps, ChatContainerState> {

    /**
     *
     */
    constructor(props: ChatContainerProps) {
        super(props);
        this.state = {
            animating: false
        }
    }

    public render() {
        return ( 
            <div className="chat_container">
                <div className="setting_container">
                    
                    <div className="settings">
                        <button className="refresh_button" onClick={(e) => {
                            this.setState({ animating: !this.state.animating });
                            this.props.thunkStartConversation()
                        }}>
                            <span className={"refresh_icon " + (this.state.animating ? "rotate" : "")} onAnimationEnd={(e) => {
                                this.setState({ animating: false })

                            }}>

                            </span>
                        </button>
                        <div className="data_input">
                            <input className="data_checkbox" type="checkbox" checked={!this.props.chat.isTesting} onChange={() => {
                                this.props.isTesting()
                                this.props.thunkStartConversation()
                            }} name="r1" id="r1_1" />
                            <label className="data_label" htmlFor="r1_1">DATA</label>
                        </div>

                    </div>

                </div>
                <ChatRoom />
                <MessageInput />
            </div>
        )
    }
}


const mapStateToProps = (state: AppState) => ({
    chat: state.message
});

export default connect(
    mapStateToProps,
    { thunkStartConversation, isTesting }
)(ChatContainer)