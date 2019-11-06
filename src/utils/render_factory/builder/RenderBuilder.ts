export interface IRenderBuilder<T> {
    build():T
    combine(renderBuilder:IRenderBuilder<T>):void;
}