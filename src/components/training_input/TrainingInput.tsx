import React from "react";
import './TrainingInput.css'
import TagContainer from "./tag/TagContainer";
import { ChatState } from "../../redux/message/types";
import { setInput } from "../../redux/message/action";
import { AppState } from "../../redux";
import { connect } from "react-redux";

interface TrainingInputProps {
    chat: ChatState,
    setInput: typeof setInput
}

interface TrainingInputState {
    editActive: boolean
}

class TrainingInput extends React.Component<TrainingInputProps, TrainingInputState> {

    /**
     *
     */
    constructor(props: TrainingInputProps) {
        super(props);
        this.state = {
            editActive: false
        }
    }

    public render() {

        var inputValue: string = this.props.chat.inputMessage ? this.props.chat.inputMessage : "";

        return (
            <div className="training_field">
                <div className="training_input_field">
                    {
                        this.state.editActive ? (
                            <div className="training_input_wrapper">
                                <input className="input"
                                    type="text"
                                    value={inputValue}
                                    onChange={e =>
                                        this.props.setInput(e.target.value)
                                    }
                                />
                                <span className="underline"></span>
                            </div>
                        ) : (<TagContainer />)
                    }
                </div>
                <button className={"edit_button" + " " + (this.state.editActive ? "edit_active" : "")} onClick={e => this.setState({ editActive: !this.state.editActive })}>
                    <span className="icon">

                    </span>
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    chat: state.message
})

export default connect(
    mapStateToProps,
    { setInput }
)(TrainingInput);
