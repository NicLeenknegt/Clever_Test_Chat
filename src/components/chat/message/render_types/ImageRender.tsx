import { IRenderType } from "../../../../utils/render_factory/render_type/RenderType";
import React,{ ReactElement } from "react";
import {IRenderBuilder} from "../../../../utils/render_factory/builder/RenderBuilder";
import { ReactElementBuilder } from "../../../../utils/render_factory/builder/ReactElementBuilder";
import { ImageMessage } from "../../../../domain/Messages/ImageMessage";
import './ImageRender.css'

export class ImageRender implements IRenderType<ReactElement[]> {

    message:ImageMessage

    /**
     *
     */
    constructor(message:ImageMessage) {
        this.message = message
    }

    render(): IRenderBuilder<ReactElement[]> {
        var images = []
                for (var index in this.message.images) {
                    var image = this.message.images[index]
                    images.push(
                        <div key={index} className="image_container">
                            <img alt="" className="image_message" src={image.url} />
                            <div className="link_container">
                                <a href={image.url}>{image.url}</a>
                            </div>
                        </div>
                    )
                }
        return new ReactElementBuilder(
            [
                <div style={{width:'70%', display:'inline'}} >
                    <div key={this.message.index} className="bot_message">
                        {this.message.question}
                    </div>
                    {images}
                </div>
            ]
        )
        
    }

}