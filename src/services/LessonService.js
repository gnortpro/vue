import axios from "axios"

const apiClient = axios.create({
  baseURL: `https://blog.trongggg.com/wp-json/lesson`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
})

export default {
  // chưa có data để get lesson theo course id
  //   getListLessonOfCourse(id) {
  //     return apiClient.get("/lessons/" + id)
  //   }

  getListLessonOfCourse() {
    return apiClient.get("/list_lesson")
  },
  // chưa có data để get lesson detail by id
  getLessonDetail(id) {
    return apiClient.get("/list_lesson/" + id)
  }

  // getLessonDetail() {
  //   return apiClient.get("/lessonDetail")
  // }
}
