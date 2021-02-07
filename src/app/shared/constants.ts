export class ApiConstants {
    baseUrl = "http://localhost:3000"
}
export interface Jobs {
    "title": string,
    "company":string
    "description": string,
    "locality": string,
    "expire_date": Date
}