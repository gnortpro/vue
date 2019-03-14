<template>
  <div>
    <div></div>
  </div>
</template>

<script>
const token_user = localStorage.token
import { mapGetters } from "vuex"
export default {
  data() {
    return {
      token: false
    }
  },
  computed: {
    checklogin() {
      return this.$store.getters.checkLogin
    }
  },
  beforeCreate() {
    this.$store.dispatch("checkToken")
  },
  created() {
    this.LoginOrNot()
  },
  methods: {
    LoginOrNot() {
      if (this.$store.getters.checkLogin == 1) {
        this.token = true
        console.log(this.token)
      }
    }
  }
}
</script>

<style>
</style>
