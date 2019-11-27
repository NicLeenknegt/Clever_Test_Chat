import { IRenderType } from "../../../../utils/render_factory/render_type/RenderType";
import React, { ReactElement } from "react";
import {IRenderBuilder} from "../../../../utils/render_factory/builder/RenderBuilder";
import { ReactElementBuilder } from "../../../../utils/render_factory/builder/ReactElementBuilder";
import './LoadingRender.css'

export class LoadingRender implements IRenderType<ReactElement[]> {
    private index:number = 0
    /**
     *
     */
    constructor(index:number) {
        this.index = index
    }

    render(): IRenderBuilder<ReactElement[]> {
        return new ReactElementBuilder([
            <div key={this.index} className="loading_message">
                <div></div>
                <div></div>
            </div>
        ])
    }

}