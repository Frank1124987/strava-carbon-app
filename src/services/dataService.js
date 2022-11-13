import http from "../httpCommon";

class dataService{
    uploadData(client, survey){
        return http.post("/api/upload", {client: client, survey: survey})
        // console.log(client_id, client_secret)
    }

    // stravaAuth(client_id){
    //     return http.get()
    // }
}

export default new dataService