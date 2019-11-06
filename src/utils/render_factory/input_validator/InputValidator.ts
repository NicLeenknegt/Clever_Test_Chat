import { RenderSelector } from "../RenderSelector";

export interface IInputValidator {
    validate(input:any):RenderSelector | null
} 