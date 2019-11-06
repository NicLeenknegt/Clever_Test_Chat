import {IRenderType} from './render_type/RenderType'
import {IRenderBuilder} from './builder/RenderBuilder'
import { BuilderCombiner } from './builder/BuilderCombiner'

export class RenderSelector {
    renderTypes:IRenderType<any>[]
    /**
     *
     */
    constructor(renderTypes: IRenderType<any>[]) {
        this.renderTypes = renderTypes
    }
    
    public select():IRenderBuilder<any> {
        
        var renderBuilders:IRenderBuilder<any>[] = []
        for (var index in this.renderTypes) {
            renderBuilders.push(this.renderTypes[index].render())
        }

        return new BuilderCombiner().render(renderBuilders)
    }
}