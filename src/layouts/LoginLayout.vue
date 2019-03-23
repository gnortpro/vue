<template>
  <LoginForm/>
</template>

<script>
import { mapActions, mapState } from "vuex"
export default {
  methods: {
    ...mapActions(["fetchAccessToken"])
  },
  created() {
    this.fetchAccessToken()
  }
}
</script>

<style>
</style>
