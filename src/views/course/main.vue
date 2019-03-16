<template>
  <div id="course">
    <div class="container" style="max-width: 1280px">
      <div class="row">
        <div class="col-md-8">
          <h1 class="text-left" style="font-weight: 600;">In Progress</h1>
          <div class="row">
            <CourseCard v-for=" c in course" :key="c.id" :courseDetail="c"/>
          </div>
        </div>
        <div class="col-md-4">
          <h1 style="font-weight: 600;">Recommended Course</h1>
          <v-card class="recommended-course" style="margin-bottom: 20px">
            <v-card-title primary-title>
              <div class="text-center">
                <v-img
                  class="course-thumbnail"
                  src="https://learn.x3english.com/wp-content/uploads/2017/07/05-banner-492x305-3.jpg"
                ></v-img>
                <div class="course-title">Eng Breaking</div>
                <span
                  class="course-excerpt"
                >Listen to your favorite artists and albums whenever and wherever, online and offline.</span>
                <p>13 lessons</p>
              </div>
            </v-card-title>

            <v-card-actions class="justify-center">
              <v-btn round large color="success">Play</v-btn>
            </v-card-actions>
          </v-card>

          <v-card class="recommended-course" style="margin-bottom: 20px">
            <v-card-title primary-title>
              <div class="text-center">
                <v-img
                  class="course-thumbnail"
                  src="https://learn.x3english.com/wp-content/uploads/2017/07/05-banner-492x305-3.jpg"
                ></v-img>
                <div class="course-title">Eng Breaking</div>
                <span
                  class="course-excerpt"
                >Listen to your favorite artists and albums whenever and wherever, online and offline.</span>
                <p>13 lessons</p>
              </div>
            </v-card-title>

            <v-card-actions class="justify-center">
              <v-btn round large color="success">Play</v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import CourseCard from "@/components/course/course.vue"
export default {
  components: {
    CourseCard
  },
  created() {
    this.$store.dispatch("fetchCource")
  },
  computed: mapState(["course"])
}
</script>
<style>
.recommended-course {
  border-radius: 16px;
}
</style>

