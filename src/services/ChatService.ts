import { UserTextMessage } from "../domain/Messages/TextMessage"

const conversationUrl = 'http://localhost:5000/api/v2'
const defaultHeaders = new Headers({
    'Content-Type': 'application/json',
    'zoovu-unst-test': 'true'
})



export class ChatService {
    serviceUrl:string = ""
    /**
     *
     */
    constructor() {
        this.serviceUrl = `${conversationUrl}`
    }

    

    public initiateConversation():Promise<any> {
        return fetch(
            new Request (
                `${conversationUrl}/conversation/create`,
                {
                    method: 'POST',
                    headers: defaultHeaders,
                    body: JSON.stringify({ 
                        "config": {
                            "embedToken": "cjyyd9fyv0001yc7kfrzq5tc2",
                            "publishVersion": 1
                        },
                        "context": {
                        }
                    })
                }
            )
        ).then(response => {
            return response.json()
        }
        )
    }

    private buildPayload(message:UserTextMessage):any {
        var context = JSON.parse(message.toJson()).context
        context.resultNode = [context.resultNode]
        var input = JSON.parse(message.toJson()).input
        var json = JSON.stringify({
            "config": {
                "embedToken": "cjyyd9fyv0001yc7kfrzq5tc2",
                "publishVersion": 1
            },
            context,
            input
        })
        return json
    }

    public sendMessage(message:UserTextMessage):Promise<any> {
        console.log(JSON.stringify(JSON.parse(this.buildPayload(message))));
        return fetch(
            new Request (
                `${conversationUrl}/conversation/ck2dd21go003latt5ju9ee512/message`, {
                    method: 'POST',
                    headers:defaultHeaders,
                    body:this.buildPayload(message)
                }
            )
        )
        .then(response => response.json())
    }

}