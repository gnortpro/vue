import axios from "axios"

const apiClient = axios.create({
  baseURL: `https://blog.trongggg.com/wp-json/topics`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
})

export default {
  getTopicByLessonId(id) {
    return apiClient.get("/list_topic/" + id)
  },
  getTopicDetails(id) {
    return apiClient.get("/topic_detail/" + id)
  }
}
