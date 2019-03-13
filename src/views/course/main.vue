<template>
  <div id="course">
    <div class="container">
      <h2 class="text-center">Toeic Test</h2>
      <div class="row">
        <CourseCard v-for="(c, index) in course" :key="index" :course="c"/>
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

