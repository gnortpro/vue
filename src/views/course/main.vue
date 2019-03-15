<template>
  <div id="course">
    <div class="container" style="max-width: 1280px">
      <div class="row">
        <div class="col-md-8">
          <h2 class="text-left">In Progress</h2>
          <div class="row">
            <CourseCard v-for=" c in course" :key="c.id" :courseDetail="c"/>
          </div>
        </div>
        <div class="col-md-4">
          <h2>Recommended Course</h2>
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

