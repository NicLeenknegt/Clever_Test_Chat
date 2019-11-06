import {IRenderBuilder} from './RenderBuilder'

export class BuilderCombiner{

    public render(renderBuilders:IRenderBuilder<any>[]):IRenderBuilder<any> {
        var lastBuilder:IRenderBuilder<any> | null = null

        for (var index in renderBuilders) {
            if (lastBuilder !== null)
                renderBuilders[index].combine(lastBuilder)
            lastBuilder = renderBuilders[index]
        }

        return (lastBuilder !== null)? lastBuilder: renderBuilders[0]
    }
}