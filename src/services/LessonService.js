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
  //   getListLessonOfCourse(id) {
  //     return apiClient.get("/lessons/" + id)
  //   }

  getListLessonOfCourse() {
    return apiClient.get("/lessons")
  }
}
