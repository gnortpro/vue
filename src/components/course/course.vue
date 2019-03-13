<template>
  <div class="col-md-4">
    <v-card href="#" id="grayscale-background">
      <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>
      <v-card-title primary-title class="justify-center">{{ course.name }}</v-card-title>
      <v-card-actions class="justify-center">
        <v-btn color="success">Tiếp tục học ngay</v-btn>
        <v-btn color="success">Khám phá ngay</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    course: Object
  }
}
</script>

<style>
#grayscale-background {
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: gray;
  -webkit-filter: grayscale(1);
  color: #b7b3b3;
}
#grayscale-background:hover {
  -webkit-filter: none;
  -moz-filter: none;
  filter: none;
  color: #012243;
  cursor: pointer;
}
a#grayscale-background:hover {
  text-decoration: none;
}
</style>
