<template>
  <v-app id="insprie">
    <Toolbar/>
    <v-content>
      <router-view :key="$route.fullPath"></router-view>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; X3English</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  components: {
    Toolbar: () => import("@/components/layouts/Toolbar.vue")
  }
}
</script>
<style>
.footer {
  position: fixed;
  bottom: 0;
  padding-left: 20px;
}
a.v-list__tile:hover {
  font-style: unset;
}
</style>