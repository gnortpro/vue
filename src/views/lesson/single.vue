<template>
  <div class="lesson_single">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="lesson_single_head">
            <v-parallax
              height="300"
              dark
              src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
            >
              <v-layout align-center column justify-center>
                <h1 class="display-2 font-weight-thin mb-3">{{lessonDetail.post_title}}</h1>
              </v-layout>
            </v-parallax>
          </div>
          <div class="lesson_single_body">
            <div class="lesson_single_body_content" v-html="lessonDetail.post_content"></div>
            <div class="container">
              <TopicExpansion/>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <LessonExpansion/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  components: {
    LessonExpansion: () => import("@/components/course/list_lesson.vue"),
    TopicExpansion: () => import("@/components/course/list_topic.vue")
  },
  created() {
    this.$store.dispatch("fetchLessonDetail")
  },
  computed: {
    ...mapState(["lessons"]),
    ...mapState(["lessonDetail"])
  }
}
</script>

<style>
.lesson_single_body_content {
  padding: 30px 20px;
}
</style>
