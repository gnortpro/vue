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
      <div class="row">
        <div class="col-md-9" style="padding-right: 0;padding-left: 0;">
          <div class="container" style="background: white; padding: 10px 50px;">
            <div class="clearfix">
              <div
                class="float-left"
                style="font-size: 25px;font-weight: 600;color: #ff3333;"
              >{{courseDetails.lesson}} lessons</div>
              <div class="float-right">
                <v-btn round color="primary">In Progress</v-btn>
              </div>
            </div>
          </div>
          <div class="container">
            <div
              class="course_single_body_details"
              style="padding: 15px 20px 50px 25px;"
              v-html="courseDetails.post_content"
            ></div>

            <LessonExpansion/>
          </div>
        </div>
        <div class="col-md-3" style="padding-right: 0;padding-left: 0;">
          <div class="container" style="background: #D9D9D9; text-align: center">
            <h3>TIẾNG ANH TRÔI CHẢY HƠN</h3>
            <div class="row">
              <div class="recommended_course">
                <v-card flat style="margin-bottom: 20px">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                    aspect-ratio="2.75"
                  ></v-img>

                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                    </div>
                  </v-card-title>
                </v-card>

                <v-card flat style="margin-bottom: 20px">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                    aspect-ratio="2.75"
                  ></v-img>

                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                    </div>
                  </v-card-title>
                </v-card>
                <v-card flat style="margin-bottom: 20px">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                    aspect-ratio="2.75"
                  ></v-img>

                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                    </div>
                  </v-card-title>
                </v-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LessonExpansion from "@/components/course/list_lesson.vue"
import { mapState } from "vuex"
export default {
  data() {
    return {
      interval: {},
      value: 0
    }
  },
  components: {
    LessonExpansion
  },
  props: ["ID"],
  created() {
    this.$store.dispatch("fetchCourseDetails", this.ID)
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
