<template>
  <div>
    <div class="expansion_heading">
      <div class="clearfix">
        <div class="float-left">Topic</div>
        <div class="float-right">
          <v-btn outline @click="all" color="primary" dark style="border:none">Expand All</v-btn>|
          <v-btn outline @click="none" color="succprimaryess" style="border:none">Collapse All</v-btn>
        </div>
      </div>
    </div>
    <v-expansion-panel dark v-model="panel" expand>
      <v-expansion-panel-content v-for="(topic , i) in topics" :key="i">
        <template v-slot:header>
          <div>{{topic.post_title}}</div>
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

  props: {
    listlesson: Object,
    ID: {
      type: String,
      default: "1"
    }
  },
  computed: {
    ...mapState(["topics"]),
    ...mapGetters(["number_topic_of_lesson"])
  },
  created() {
    this.$store.dispatch("fetchTopics", this.ID)
    console.log(this.ID)
  },
  methods: {
    all() {
      this.panel = [...Array(this.topics.length).keys()].map(_ => true)
    },
    // Reset the panel
    none() {
      this.panel = []
    }
  }
}
</script>

<style>
.expansion_heading {
  background: white;
  padding: 5px 19px 3px 22px;
}
.expansion_heading .float-left {
  font-size: 25px;
  font-weight: 600;
}
</style>
