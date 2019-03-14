<template>
  <div>
    <CourseHeader>
      <h1 slot="course-title">{{title}}</h1>
      <p slot="course-excerpt">{{excerpt}}</p>
    </CourseHeader>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Eng Breaking",
      excerpt:
        "Phá băng tiếng Anh, thành thạo giao tiếp cơ bản với người bản xứ chỉ sau 144 giờ luyện tập, dựa trên 3 kỹ thuật nền tảng."
    }
  }
}
</script>

<style>
</style>
