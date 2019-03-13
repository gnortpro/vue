import axios from "axios"

const apiClient = axios.create({
  baseURL: `https://reqres.in/api`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
})

export default {
  getCource() {
    return apiClient.get("/unknown")
  }
}
