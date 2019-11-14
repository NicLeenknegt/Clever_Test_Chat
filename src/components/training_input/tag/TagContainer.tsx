import React, { ReactElement } from "react";
import './TagContainer.css'
import Tag from "./Tag";
import { AppState } from "../../../redux";
import { connect } from "react-redux";
import { ChatState } from "../../../redux/message/types";

interface TagContainerProps {
    chat:ChatState
}

class TagContainer extends React.Component<TagContainerProps> {
    
    public render() {
        var elements:ReactElement[] = []
        console.log(this.props.chat.inputMessage)

        if (this.props.chat.inputMessage !== undefined) {
            var message = this.props.chat.inputMessage
            message.split(" ").map((input:string) => {
                if (input !== "")
                    elements.push(<Tag tagLine={input}/>)
            })
        }
        return (
            <div className="tag_container">
                {
                    elements
                }
            </div>
        )
    }
    
}

const mapStateToProps = (state:AppState) => ({
    chat:state.message
});

export default connect(
    mapStateToProps
)(TagContainer);
