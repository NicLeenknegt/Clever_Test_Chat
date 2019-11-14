
const recommedationUrl = "https://tiger-runner.zoovu.com/api/v1/advisorRunner"
export class RecommendationService {
    serviceUrl:string = ""
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
                    headers: new Headers({
                        'Content-Type': 'application/json',
                        'runner-session-id': 'c68c8a58-f540-433f-a05a-92458baf5b05'
                    })
                }
            )
        ).then(response => {
            console.log(response)
            return response.json()
        }
        )
    }
}