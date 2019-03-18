<template>
  <div class="course_single">
    <v-container grid-list-md class="course_single_header">
      <v-layout row wrap>
        <v-flex xs2>
          <div class="course-avatar text-center">
            <img class="img-responsive" :src="courseDetails.thumbnail" alt>
          </div>
        </v-flex>
        <v-flex xs6>
          <div class="course-details text-left">
            <!-- Eng Breaking -->
            <h1 style="font-weight: 600;">{{courseDetails.post_title}}</h1>
            <p class="course-excerpt">{{courseDetails.post_excerpt}}</p>
            <!-- <div class="progress_details clearfix">
              <div class="float-left">1 out of 85 steps completed</div>
              <div class="float-right">1%</div>
            </div>-->
            <!-- <v-progress-linear color="info" height="10" value="45"></v-progress-linear> -->
          </div>
        </v-flex>
        <v-flex xs2>
          <div class="text-center">
            <v-progress-circular
              :rotate="-90"
              :size="100"
              :width="15"
              :value="value"
              color="primary"
            >{{ value }}%</v-progress-circular>
            <p style="font-size: 20px;
    font-weight: 600;
    margin-top: 10px;">In Progress</p>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <div class="course_single_body">
      <v-layout row>
        <v-flex xs9>
          <v-container grid-list-md style="background: white; padding: 10px 50px;">
            <div class="clearfix">
              <div
                class="float-left"
                style="font-size: 25px;font-weight: 600;color: #ff3333;"
              >{{courseDetails.lesson}} lessons</div>
              <div class="float-right">
                <v-btn round color="primary">In Progress</v-btn>
              </div>
            </div>
          </v-container>
          <v-container grid-list-md style="padding: 30px 50px;">
            <div class="course_single_body_details" v-html="courseDetails.post_content"></div>
            <v-container grid-list-md>
              <div class="expansion_heading">
                <div class="clearfix">
                  <div class="float-left">Lessions</div>
                  <div class="float-right">
                    <v-btn outline @click="all" color="primary" dark style="border:none">Expand All</v-btn>|
                    <v-btn
                      outline
                      @click="none"
                      color="succprimaryess"
                      style="border:none"
                    >Collapse All</v-btn>
                  </div>
                </div>
              </div>
              <v-expansion-panel dark v-model="panel" expand>
                <v-expansion-panel-content v-for="(item,i) in items" :key="i">
                  <template v-slot:header>
                    <div>Item</div>
                  </template>
                  <v-card>
                    <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-container>
          </v-container>
        </v-flex>
        <v-flex xs3>
          <v-container grid-list-md style="background: #D9D9D9">
            <h3>TIẾNG ANH TRÔI CHẢY HƠN</h3>
            <v-layout align-center column>
              <v-card flat style="margin-bottom: 20px">
                <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                  </div>
                </v-card-title>
              </v-card>

              <v-card flat style="margin-bottom: 20px">
                <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                  </div>
                </v-card-title>
              </v-card>
              <v-card flat style="margin-bottom: 20px">
                <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                  </div>
                </v-card-title>
              </v-card>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  data() {
    return {
      panel: [],
      items: 5,
      interval: {},
      value: 0
    }
  },
  props: ["ID"],
  created() {
    this.$store.dispatch("fetchCourseDetails", this.ID)
  },
  methods: {
    // Create an array the length of our items
    // with all values as true
    all() {
      this.panel = [...Array(this.items).keys()].map(_ => true)
    },
    // Reset the panel
    none() {
      this.panel = []
    }
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0)
      }
      this.value += 10
    }, 1000)
  },
  computed: mapState(["courseDetails"])
}
</script>

<style scope>
.course-details {
  font-weight: 600;
}
.course-avatar img {
  width: 150px;
  height: 100px;
}
.expansion_heading {
  background: white;
  padding: 5px 19px 3px 22px;
}
.expansion_heading .float-left {
  font-size: 25px;
  font-weight: 600;
}
</style>
