import React, { ReactElement } from "react";
import './TrainingInput.css'
import { TagContainer } from "./tag/TagContainer";
import { NLPState } from "../../redux/nlp/types";
import { AppState } from "../../redux";
import { connect } from "react-redux";

interface TrainingInputProps {
    nlp:NLPState
}

class TrainingInput extends React.Component<TrainingInputProps> {

    private renderTags(input:string):ReactElement[] {
        var splittedInput:string[] = input.split(" ")
        var elements:ReactElement[] = []
        splittedInput.map((input:string) => {
            elements.push(<button className="tag">
                {input}
            </button>)
        })
        return elements
    }

    private tagClickHandler(input:string) {
        console.log(input);
    } 

    componentDidUpdate() {
        console.log(this.props.nlp.selectedTag)
    }

    public render() {

        return (
            <div className="training_field">
                <TagContainer input={this.props.nlp.input === undefined?"":this.props.nlp.input}/>
                <div className="edit_button">

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state:AppState) => ({
    nlp:state.nlp
});

export default connect(
    mapStateToProps
)(TrainingInput);