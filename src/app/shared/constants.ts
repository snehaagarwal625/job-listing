export class ApiConstants {
    baseUrl = "http://localhost:3000";
    locations = [
        'Bangalore' , 'Mumbai' , 'Delhi', 'Chennai', 'Hyderabad', 'Gurgaon'
    ]
}
export interface Jobs {
    "title": string,
    "company":string
    "description": string,
    "locality": string,
    "expire_date": Date
}