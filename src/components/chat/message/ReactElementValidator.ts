import { IInputValidator } from "../../../utils/render_factory/input_validator/InputValidator";
import { RenderSelector } from "../../../utils/render_factory/RenderSelector"
import React, { ReactElement } from 'react'
import {MessageType} from '../../../redux/message/types'
import { IRenderType } from "../../../utils/render_factory/render_type/RenderType";
import { TextRender } from "./render_types/TextRender";
import { LoadingRender } from "./render_types/LoadingRender";
import { ImageRender } from "./render_types/ImageRender";
import { ErrorRender } from "./render_types/ErrorRender";
import {ButtonRender} from "./render_types/ButtonRender";

export class ReactElementValidator implements IInputValidator {

    renderTypes:IRenderType<ReactElement[]>[] = []

    validate(input: any): RenderSelector | null {
        input = input as MessageType
        if (input !== undefined) {
            console.log(input)
            switch(input.renderType) {
                case "IMAGE":
                    this.renderTypes.push(new ImageRender(input));
                    break;
                case "USER_TEXT":
                    this.renderTypes.push(new TextRender(input));
                    break;
                case "REPLY_TEXT":
                    this.renderTypes.push(new TextRender(input));
                    break;
                case "BUTTON":
                    this.renderTypes.push(new ButtonRender(input));
                    break;
                case "LOADING":
                    this.renderTypes.push(new LoadingRender());
                    break;
                case "ERROR":
                    this.renderTypes.push(new ErrorRender(input));
                    break;
            }
            console.log(this.renderTypes)
            return new RenderSelector(this.renderTypes)
        }
        return null
    }

}

