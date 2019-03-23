import axios from "axios"

const apiClient = axios.create({
  baseURL: `https://blog.trongggg.com/wp-json/courses`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
})

export default {
  getCource() {
    return apiClient.get("/list_course")
  },
  getCourceDetails(id) {
    return apiClient.get("/list_course/" + id)
  }
}
