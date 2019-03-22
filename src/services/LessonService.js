import axios from "axios"

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
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
    return apiClient.get("/lessons")
  },
  // chưa có data để get lesson detail by id
  // getLessonDetail(id){
  //   return apiClient.get("/lesson/" + id)
  // },

  getLessonDetail() {
    return apiClient.get("/lessonDetail")
  }
}
