import React, { ReactElement } from "react";
import './TagContainer.css'
import Tag from "./Tag";

interface TagContainerProps {
    input:string
}

export class TagContainer extends React.Component<TagContainerProps> {
    
    public render() {
        var elements:ReactElement[] = []
        console.log(this.props.input)
        if (this.props.input.trim() !== "")
            this.props.input.split(" ").map((input:string) => {
                elements.push(<Tag tagLine={input}/>)
            })
        return (
            <div className="tag_container">
                {
                    elements
                }
            </div>
        )
    }
}