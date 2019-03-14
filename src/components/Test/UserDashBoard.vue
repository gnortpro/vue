<template>
  <v-container grid-list-xs>
    <div class="user-dashboard">This is user dashboard</div>
    <div class="user-list">
      <h4>UserList</h4>
      <UserList/>
      <h4>UserDetail</h4>
      <UserDetail/>
    </div>
  </v-container>
</template>

<script>
import { mapState } from "vuex"
import UserList from "@/components/Test/UserList.vue"
import UserDetail from "@/components/Test/UserDetail.vue"
export default {
  components: {
    UserList,
    UserDetail
  }
}
</script>

<style>
</style>
