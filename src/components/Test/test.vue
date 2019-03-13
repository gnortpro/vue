<template>
  <div class="container">
    <v-btn color="primary" @click="setLayout('simple-layout')">Simple Layout</v-btn>
    <v-btn color="secondary" @click="setLayout('app-layout')">App Layout</v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    setLayout(layout) {
      this.$store.commit("SET_LAYOUT", layout)
    }
  }
}
</script>