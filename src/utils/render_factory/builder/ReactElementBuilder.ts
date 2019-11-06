import { IRenderBuilder } from "./RenderBuilder";
import React, { ReactElement } from "react";

export class ReactElementBuilder implements IRenderBuilder<ReactElement[]> {

    combinedBuilder:ReactElementBuilder | null = null
    reactElements:ReactElement[]

    /**
     *
     */
    constructor(reactElement:ReactElement[]) {
        this.reactElements = reactElement
    }

    build(): ReactElement[] {
        if (this.combinedBuilder !== null) {
            
        }
        return this.reactElements
    }    

    combine(renderBuilder: ReactElementBuilder): void {
        this.combinedBuilder = renderBuilder
    }


} 