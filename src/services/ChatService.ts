import { UserTextMessage } from "../domain/Messages/TextMessage"

const conversationUrl = 'http://localhost:5000/api/v2'



export class ChatService {
    serviceUrl: string = ""
    /**
     *
     */
    constructor() {
        this.serviceUrl = `${conversationUrl}`
    }



    public initiateConversation(isTesting: boolean = true): Promise<any> {
        return fetch(
            new Request(
                `${conversationUrl}/conversation/create`,
                {
                    method: 'POST',
                    headers: new Headers({
                        'Content-Type': 'application/json',
                        'zoovu-unst-test': isTesting ? 'true' : 'false'
                    }),
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

    private buildPayload(message: UserTextMessage): any {
        var context = JSON.parse(message.toJson()).context
        if (!Array.isArray(context.resultNodes))
            context.resultNodes = [context.resultNodes]
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

    public sendMessage(message: UserTextMessage, isTesting: boolean = true): Promise<any> {
        console.log(JSON.stringify(JSON.parse(this.buildPayload(message))));
        return fetch(
            new Request(
                `${conversationUrl}/conversation/ck2dd21go003latt5ju9ee512/message`, {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'zoovu-unst-test': isTesting ? 'true' : 'false'
                }),
                body: this.buildPayload(message)
            }
            )
        )
            .then(response => response.json())
    }

}