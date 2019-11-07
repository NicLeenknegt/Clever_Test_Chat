import React, { ReactElement } from "react";
import './TrainingInput.css'
import TagContainer from "./tag/TagContainer";
import { ChatState } from "../../redux/message/types";
import { AppState } from "../../redux";
import { connect } from "react-redux";

interface TrainingInputProps {
    chat:ChatState
}

interface TrainingInputState {
    editActive:boolean
}

class TrainingInput extends React.Component<TrainingInputProps,TrainingInputState> {

    /**
     *
     */
    constructor(props:TrainingInputProps) {
        super(props);
        this.state = {
            editActive:false
        }
    }

    public render() {

        return (
            <div className="training_field">
                <div className="training_input_field">
                    <TagContainer />
                    <div className="text_input_wrapper">
                        <input className="input"
                            type="text"
                            value={this.props.chat.inputMessage?this.props.chat.inputMessage.messages[0].text:""}
                            />
                        <span className="underline"></span>
                    </div>
                </div>
                <button className={"edit_button" + " " } onClick={e => this.setState({editActive: !this.state.editActive})}>
                    <span className="icon">

                    </span>
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state:AppState) => ({
    chat:state.message
})

export default connect(
    mapStateToProps
)(TrainingInput);
