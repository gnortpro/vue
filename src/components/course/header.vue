<template>
  <div class="course-header">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="course-avatar">
            <img
              class="img-responsive"
              src="https://learn.x3english.com/wp-content/uploads/2017/07/05-banner-492x305-3.jpg"
              alt
            >
          </div>
        </div>

        <div class="col-md-8">
          <div class="course-details text-left">
            <!-- Eng Breaking -->
            <h1>
              <slot name="course-title"></slot>
            </h1>
            <p class="course-excerpt">
              <!-- á băng tiếng Anh, thành thạo giao tiếp cơ bản với người bản xứ chỉ sau 144 giờ luyện tập, dựa trên 3 kỹ thuật nền tảng. -->
              <slot name="course-excerpt"></slot>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
