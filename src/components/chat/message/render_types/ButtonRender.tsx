import { IRenderType } from "../../../../utils/render_factory/render_type/RenderType";
import React,{ ReactElement } from "react";
import {IRenderBuilder} from "../../../../utils/render_factory/builder/RenderBuilder";
import { ReactElementBuilder } from "../../../../utils/render_factory/builder/ReactElementBuilder";
import { ButtonMessage } from "../../../../domain/Messages/ButtonMessage";
import './ButtonRender.css'
export class ButtonRender implements IRenderType<ReactElement[]> {

    message:ButtonMessage = new ButtonMessage()

    /**
     *
     */
    constructor(message:ButtonMessage) {
        this.message = message
    }

    render(): IRenderBuilder<ReactElement[]> {
        return new ReactElementBuilder( [
            <div key={this.message.index} >
                <div className="bot_message" >
                    {this.message.question}
                </div>
                <div className="button_list_container">
                    {
                        this.message.buttons.map((button, index:number) => {
                            return (
                                <div key={index} className="button_list_item">
                                    <button className="button" value={button.text}>
                                        {button.title}
                                    </button>
                                </div>
                            )
                            }
                        )
                    }
                </div>

            </div>
        ])
    }

    
}