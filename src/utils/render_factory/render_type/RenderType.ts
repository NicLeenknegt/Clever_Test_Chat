import {IRenderBuilder} from '../builder/RenderBuilder'

export interface IRenderType<T> {
    render(renderInput?:any):IRenderBuilder<T>
}