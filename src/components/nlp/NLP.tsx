import React, { ReactElement } from "react";
import './NLP.css'
import { ChatState, MessageType } from "../../redux/message/types";
import { AppState } from "../../redux";
import { connect } from "react-redux";
import { Entity } from "../../domain/NLP/Entity";
import { TabContainer } from "../tab_container/TabContainer";
import { TableContainer } from "../table_container/TableContainer";
import { Intent } from "../../domain/NLP/Intent";
import { UserTextMessage } from "../../domain/Messages/TextMessage";
import TrainingInput  from "../training_input/TrainingInput";
import { NLPState, NLPType } from "../../redux/nlp/types";
import { setInput } from "../../redux/nlp/action";

interface NLPProps {
    chat: ChatState
    setInput:(nlp:NLPType) => void
}

class NLP extends React.Component<NLPProps> {

    public createEntities(): Entity[] {
        if (this.props.chat.selectedMessage.context !== undefined) {
            var context: any = this.props.chat.selectedMessage.context
            
            return context.entities.map((entity: any) => {
                var text = ""
                if (this.props.chat.messages.filter((value:MessageType) => {return value.renderType === "USER_TEXT"}).length > 0)
                    text = ((this.props.chat.messages.slice(0, this.props.chat.messages.indexOf(this.props.chat.selectedMessage))).filter((value:MessageType) => {return value.renderType === "USER_TEXT"}).reverse()[0] as UserTextMessage).messages[0].text
                return new Entity().fromJson(entity, text, function(entity:any):void {
                    console.log(entity)
                })
            })
        }
        return []
    }

    public hasEntities():Boolean {
        if (this.props.chat.selectedMessage.context !== undefined) {
            if (this.props.chat.selectedMessage.context.entities !== undefined) {
                console.log(this.props.chat.selectedMessage.context.entities.length);
                return this.props.chat.selectedMessage.context.entities.length > 0

            }
        }
        return false
    }

    public renderEntities():ReactElement {
        if (this.hasEntities())
            return (<TableContainer rows={this.createEntities()} type={Intent} />)
        else
            return (<p className="empty_field">NO ENTITIES</p>)
    }

    public createIntents(): Intent[] {
        if (this.props.chat.selectedMessage.context !== undefined) {
            var context: any = this.props.chat.selectedMessage.context
            return context.intents.map((intent: any) => {
                var text = ""
                if (this.props.chat.messages.filter((value:MessageType) => {return value.renderType === "USER_TEXT"}).length > 0)
                    text = ((this.props.chat.messages.slice(0, this.props.chat.messages.indexOf(this.props.chat.selectedMessage))).filter((value:MessageType) => {return value.renderType === "USER_TEXT"}).reverse()[0] as UserTextMessage).messages[0].text
                
                return new Intent().fromJson(intent, text)
            })
        }
        return []
    }


    public hasIntents():Boolean {
        if (this.props.chat.selectedMessage.context !== undefined) {
            if (this.props.chat.selectedMessage.context.intents !== undefined) {
                console.log(this.props.chat.selectedMessage.context.intents.length );
                return this.props.chat.selectedMessage.context.intents.length > 0
            }
        }
        return false
    }

    public renderIntents():ReactElement {
        if (this.hasIntents())
            return (<TableContainer rows={this.createIntents()} type={Intent} />)
        else
            return (<p className="empty_field">NO INTENTS</p>)
    }

    componentDidMount() {
        var messages = [...this.props.chat.messages]
        if (messages.filter((message:MessageType) => { return message.renderType === "USER_TEXT" }).length > 0)
            this.props.setInput({input: (messages.reverse().filter((message:MessageType) => { return message.renderType === "USER_TEXT" })[0] as UserTextMessage).messages[0].text})
    
    }

    componentDidUpdate() {
        var messages = [...this.props.chat.messages]
        if (messages.filter((message:MessageType) => { return message.renderType === "USER_TEXT" }).length > 0)
            this.props.setInput({input: (messages.reverse().filter((message:MessageType) => { return message.renderType === "USER_TEXT" })[0] as UserTextMessage).messages[0].text})
    }

    public render() {
        return (
            <div>
                <div className="entity_field">
                    <p className="table_title">Intents</p>
                    { 
                        this.renderIntents()
                    }
                </div>
                <div className="entity_field">
                    <p className="table_title">Entities</p>
                    {
                        this.renderEntities()
                    }
                </div>
                <TrainingInput/>
            </div>

        )
    }
}


const mapStateToProps = (state: AppState) => ({
    chat: state.message
});

export default connect(
    mapStateToProps,
    {setInput}
)(NLP);