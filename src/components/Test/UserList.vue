<template>
  <div class="list-user">
    <table class="tbl-list-user">
      <thead>
        <th>ID</th>
        <th>Name</th>
        <th>Year</th>
      </thead>
      <tbody>
        <tr v-for="u in user">
          <td>
            <a @click="getUserDetail(u.id)">{{ u.id }}</a>
          </td>
          <td>{{ u.name }}</td>
          <td>{{ u.year }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  created() {
    this.$store.dispatch("fetchUser")
  },
  methods: {
    getUserDetail(id) {
      this.$store.dispatch("fetchUserDetail", id)
    }
  },
  computed: mapState(["user"])
}
</script>

<style scoped>
</style>