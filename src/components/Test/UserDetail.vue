<template>
  <div class="user-detail">
    <table class="tbl-list-user">
      <thead>
        <th>ID</th>
        <th>Name</th>
        <th>Year</th>
      </thead>
      <tbody>
        <tr v-for="u in userDetail">
          <td>
            <a>{{ u.id }}</a>
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
  computed: mapState(["userDetail"])
}
</script>