import { IInputValidator } from "./input_validator/InputValidator"
import { RenderSelector } from "./RenderSelector"
import { ReactElementValidator } from "../../components/chat/message/ReactElementValidator"

export class RenderFactory {

    private validators:IInputValidator[] = [
        new ReactElementValidator()
    ]


    public setInput(input:any):RenderSelector{
        for(var index in this.validators) {
            var validator = this.validators[index]
            var selector = validator.validate(input)
            if (selector !== null && selector !== undefined)
                return selector
            
        }
        throw Error("Input type not supported at RenderFactor()")
    }
}