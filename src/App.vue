<template>
  <v-app>
    <template v-if="currentUser">
      <Toolbar/>
    </template>

    <template v-if="!currentUser">
      <LoginForm/>
    </template>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({ currentUser: "currentUser" })
  },

  created() {
    this.checkCurrentLogin();
  },
  updated() {
    this.checkCurrentLogin();
  },
  methods: {
    checkCurrentLogin() {
      if (!this.currentUser && this.$route.path !== "/") {
        this.$router.push("/?redirect=" + this.$route.path);
      }
    }
  }
};
</script>