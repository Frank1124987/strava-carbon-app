import http from "../httpCommon";

class dataService{
    uploadData(client, survey){
        return http.post("/api/upload", {client: client, survey: survey})
        // console.log(client_id, client_secret)
    }

    getCarbonReduction(activityId){
        return http.post("/api/get-carbon-reduction",{
            activity_id: activityId
        })
    }
}

export default new dataService