import axios from "axios";

export default axios.create({
    baseURL: "https://27b3-119-14-159-44.jp.ngrok.io",
    // headers: {
    //     post: {
    //         "Content-type": "application/x-www-form-urlencoded"
    //     }
    // }
  });

// console.log(axios.defaults.headers.post)