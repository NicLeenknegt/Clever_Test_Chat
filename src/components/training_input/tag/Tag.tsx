import React from "react";
import { connect } from "react-redux";
import { NLPState, NLPType } from "../../../redux/nlp/types";
import { AppState } from "../../../redux";
import { selectTag } from "../../../redux/nlp/action";

interface TagProps {
    tagLine: string,
    selectTag:(nlp:NLPType) => void
}

class Tag extends React.Component<TagProps> {
    public render() {
        return (
            <button className="tag" onClick={e => this.props.selectTag({ tag: this.props.tagLine})}>
                {this.props.tagLine}
            </button>
        )
    }
}

export default connect(
    null,
    {selectTag}
)(Tag)