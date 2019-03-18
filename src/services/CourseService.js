import axios from "axios"

const apiClient = axios.create({
  baseURL: `http://localhost:3001`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
})

export default {
  getCource() {
    return apiClient.get("/courses")
  },
  getCourceDetails(id) {
    return apiClient.get("/courses/" + id)
  }
}
