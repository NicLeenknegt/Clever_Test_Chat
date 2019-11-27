import React from "react";
import { connect } from "react-redux";
import { AppState } from "../../../redux";
import { selectTag } from "../../../redux/message/action";
import './Tag.css'
import { ChatState } from "../../../redux/message/types";

interface TagProps {
    tagLine: string,
    chat:ChatState,
    selectTag: typeof selectTag
}

class Tag extends React.Component<TagProps> {
    public render() {
        return (
            <button className={"tag" + " " + (this.props.chat.selectedTag === this.props.tagLine?"active_tag":"")} onClick={e => this.props.selectTag(this.props.tagLine)}>
                {this.props.tagLine}
            </button>
        )
    } 
}

const mapStateToProps = (state:AppState) => ({
    chat:state.message
})

export default connect(
    mapStateToProps,
    {selectTag}
)(Tag)