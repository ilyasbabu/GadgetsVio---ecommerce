import axios from "axios";
import jwt_decode from "jwt-decode";

// const baseURL = "http://0.0.0.0:8080";
let authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null
// console.log(authTokens?.access);
const headers = {
    Authorization: `Bearer ${authTokens?.access}`,
    'X-Example-Header': "example",
}

const axiosInstance = axios.create({
    // baseURL,
    // timeout: 1000,
    headers,
});


axiosInstance.interceptors.request.use(
    async request => {
        let tokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : {}
        if (JSON.stringify(tokens) === '{}') {
            console.log("Have to Login to perform this request")
            request.headers.Authorization = ``
            return request
        }
        request.headers.Authorization = `Bearer ${tokens.access}`
        const tokenDetails = jwt_decode(tokens.access)
        const now = new Date()
        const isExpired = tokenDetails.exp <= Math.floor(now.getTime() / 1000)
        if (!isExpired) {
            return request
        }
        const response = await axios.post("/api/account/token/refresh/", {
            refresh: tokens.refresh
        })
        localStorage.setItem('authTokens', JSON.stringify({
            access: response.data.access,
            refresh: tokens.refresh
        }))
        request.headers.Authorization = `Bearer ${response.data.access}`
        return request

    },
    error => {
        Promise.reject(error)
        console.log(error);
    });


export default axiosInstance
