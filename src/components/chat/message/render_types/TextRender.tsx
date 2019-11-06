import React, { ReactElement } from 'react'
import {IRenderType} from '../../../../utils/render_factory/render_type/RenderType'
import {IRenderBuilder} from '../../../../utils/render_factory/builder/RenderBuilder'
import { UserTextMessage, Text } from '../../../../domain/Messages/TextMessage'
import { ReactElementBuilder } from '../../../../utils/render_factory/builder/ReactElementBuilder'
import './TextRender.css'

export class TextRender implements IRenderType<ReactElement[]> {
 
    message:UserTextMessage

    /**
     *
     */
    constructor(message:UserTextMessage) {
        this.message = message
    }

    render(): IRenderBuilder<ReactElement[]> {
        return new ReactElementBuilder(
            
                
                    this.message.messages.map((text: Text) => {
                        return (
                            <div className={this.message.renderType === "USER_TEXT" ? "user_message" : "bot_message"}>
                                {(text.text)}
                            </div>
                        )
                    })
                
            
        )
    }   
}