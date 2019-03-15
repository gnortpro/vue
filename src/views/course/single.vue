<template>
  <div>
    <CourseHeader>
      <h1 slot="course-title">{{ courseDetails.title }}</h1>
      <p slot="course-excerpt">{{courseDetails.description}}</p>
    </CourseHeader>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  props: ["id"],
  created() {
    this.$store.dispatch("fetchCourseDetails", this.id)
  },
  computed: mapState(["courseDetails"])
}
</script>

<style>
</style>
