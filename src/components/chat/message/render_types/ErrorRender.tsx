import { IRenderType } from "../../../../utils/render_factory/render_type/RenderType";
import React,{ ReactElement } from "react";
import {IRenderBuilder} from "../../../../utils/render_factory/builder/RenderBuilder";
import { ReactElementBuilder } from "../../../../utils/render_factory/builder/ReactElementBuilder";
import { ErrorMesage } from "../../../../domain/Messages/ErrorMessage";
import './ErrorRender.css'

export class ErrorRender implements IRenderType<ReactElement[]> {

    message:ErrorMesage

    /**
     *
     */
    constructor(message:ErrorMesage) {
        this.message = message
    }
    render(): IRenderBuilder<ReactElement[]> {
        console.log("ERROR_CHECK")
        return new ReactElementBuilder([(
            <div className="error_message">
                {this.message.error}
            </div>
        )])
    }

}