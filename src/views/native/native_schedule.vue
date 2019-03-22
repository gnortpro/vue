<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <v-parallax
          height="300"
          dark
          src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        >
          <v-layout align-center column justify-center>
            <h1 class="display-2 font-weight-thin mb-3">Native Schedules</h1>
          </v-layout>
        </v-parallax>

        <v-sheet height="500">
          <!-- now is normally calculated by itself, but to keep the calendar in this date range to view events -->
          <v-calendar ref="calendar" :now="today" :value="today" color="primary" type="week">
            <!-- the events at the top (all-day) -->
            <template v-slot:dayHeadere="{ date }">
              <template v-for="event in eventsMap[date]">
                <!-- all day events don't have time -->
                <div
                  v-if="!event.time"
                  :key="event.title"
                  class="my-event"
                  @click="open(event)"
                  v-html="event.title"
                ></div>
              </template>
            </template>
            <!-- the events at the bottom (timed) -->
            <template v-slot:dayBody="{ date, timeToY, minutesToPixels }">
              <template v-for="event in eventsMap[date]">
                <!-- timed events -->
                <div
                  v-if="event.time"
                  :key="event.title"
                  :style="{ top: timeToY(event.time) + 'px', height: minutesToPixels(event.duration) + 'px' }"
                  class="my-event with-time"
                  @click="open(event)"
                  v-html="event.title"
                ></div>
              </template>
            </template>
          </v-calendar>
        </v-sheet>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    today: "2019-01-08",
    events: [
      {
        title: "Weekly Meeting",
        date: "2019-01-07",
        time: "09:00",
        duration: 45
      },
      {
        title: "Thomas' Birthday",
        date: "2019-01-10"
      },
      {
        title: "Mash Potatoes",
        date: "2019-01-09",
        time: "12:30",
        duration: 180
      }
    ]
  }),
  computed: {
    // convert the list of events into a map of lists keyed by date
    eventsMap() {
      const map = {}
      this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e))
      return map
    }
  },
  mounted() {
    this.$refs.calendar.scrollToTime("08:00")
  },
  methods: {
    open(event) {
      alert(event.title)
    }
  }
}
</script>
content_copy


<style>
</style>
