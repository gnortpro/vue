import axios from "axios"

const apiClient = axios.create({
  baseURL: `https://learn.x3english.com/wp-json/courses/v1`,
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
    return apiClient.get("/courses/" + id)
  }
}
