import { IRenderType } from "../../../../utils/render_factory/render_type/RenderType";
import React, { ReactElement } from "react";
import {IRenderBuilder} from "../../../../utils/render_factory/builder/RenderBuilder";
import { LoadingMessage } from "../../../../domain/Messages/LoadingMessage";
import { ReactElementBuilder } from "../../../../utils/render_factory/builder/ReactElementBuilder";
import './LoadingRender.css'

export class LoadingRender implements IRenderType<ReactElement[]> {
    
    render(): IRenderBuilder<ReactElement[]> {
        return new ReactElementBuilder([
            <div className="loading_message">
                <div></div>
                <div></div>
            </div>
        ])
    }

}