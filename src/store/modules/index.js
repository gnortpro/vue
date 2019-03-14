const state = {
  token: localStorage.getIte("user-token") || "",
  status: ""
}
const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status
}
const actions = {
  [AUTH_REQUEST]: ({ commit, dispatch }, user) => {
    // Dùng promise để sau khi login thành công
    // chúng ta có thể redirect user đi đến trang khác
    return new Promise((resolve, reject) => {
      commit(AUTH_REQUEST)
      axios({ url: "auth", data: user, method: "POST" })
        .then(resp => {
          const token = resp.data.token
          localStorage.setItem("user-token", token)
          // thêm header authorization:
          axios.defaults.headers.common["Authorization"] = token
          commit(AUTH_SUCCESS, resp)
          dispatch(USER_REQUEST)
          resolve(resp)
        })
        .catch(err => {
          commit(AUTH_ERROR, err)
          // nếu có lỗi, xóa hết token đang có trên trình duyệt
          localStorage.removeItem("user-token")
          reject(err)
        })
    })
  },
  [AUTH_LOGOUT]: ({ commit, dispatch }) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_LOGOUT)
      localStorage.removeItem("user-token")
      delete axios.defaults.headers.common["Authorization"]
      resolve()
    })
  }
}
//Mutations thực hiện update lại store

const mutations = {
  [AUTH_REQUEST]: state => {
    state.status = "loading"
  },
  [AUTH_SUCCESS]: (state, token) => {
    state.status = "success"
    state.token = token
  },
  [AUTH_ERROR]: state => {
    state.status = "error"
  }
}
