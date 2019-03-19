<template>
  <div>
    <div class="expansion_heading">
      <div class="clearfix">
        <div class="float-left">Lessions</div>
        <div class="float-right">
          <v-btn outline @click="all" color="primary" dark style="border:none">Expand All</v-btn>|
          <v-btn outline @click="none" color="succprimaryess" style="border:none">Collapse All</v-btn>
        </div>
      </div>
    </div>
    <v-expansion-panel dark v-model="panel" expand>
      <v-expansion-panel-content v-for="(lesson , i) in lessons" :key="i">
        <template v-slot:header>
          <div>{{lesson.post_title}}</div>
        </template>
        <v-card>
          <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex"
export default {
  data() {
    return {
      panel: []
    }
  },
  created() {
    this.$store.dispatch("fetchLessons")
  },
  props: {
    listlesson: Object
  },
  computed: {
    ...mapState(["lessons"]),
    ...mapGetters(["number_lesson_of_course"])
  },
  methods: {
    all() {
      this.panel = [...Array(this.lessons.length).keys()].map(_ => true)
    },
    // Reset the panel
    none() {
      this.panel = []
    }
  }
}
</script>

<style>
</style>
