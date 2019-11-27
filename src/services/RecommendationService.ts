
const recommedationUrl = "https://tiger-runner.zoovu.com/api/v1/advisorRunner"
export class RecommendationService {
    serviceUrl:string = ""
    runnerSessionId:string = "f85a5b3c-4136-45b9-bed1-4e5f05226950"
    headers:Headers = new Headers({
        'Content-Type': 'application/json',
        'runner-session-id': this.runnerSessionId
    })
    /**
     *
     */
    constructor() {
        this.serviceUrl = recommedationUrl
    } 

    public getRecommendation(numberOfProductsPerPage:number = 10, requestedPageNumber:number= 0):Promise<any> {
        return fetch(
            new Request( 
                `${this.serviceUrl}/recommendation?numberOfProductsPerPage=${numberOfProductsPerPage}&requestedPageNumber=${requestedPageNumber}`,
                {
                    method: 'GET',
                    headers: this.headers
                }
            )
        ).then(response => {
            return response.json()
        }
        )
    }

    public getQuestionFlow():Promise<any> {
        return fetch(
            new Request(
                `${this.serviceUrl}/questionsFlow`,
                {
                    method: 'GET',
                    headers: this.headers
                }
            )
        ).then(response => {
            return response.json()
        }
        )
    }
}