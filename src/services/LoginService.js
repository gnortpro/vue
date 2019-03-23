import axios from "axios"

const apiClient = axios.create({
  baseURL: `https://api.learn.x3english.com/api`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
})

export default {
  checkLogin() {
    return apiClient.get("/login")
  }
}
