<template>
  <v-app>
    <TheHeaderBar/>
    <v-main class="background-gray">
      <TheLayout/>
    </v-main>
  </v-app>
</template>

<script>
import TheHeaderBar from '@/components/TheHeaderBar'
import TheLayout from '@/components/TheLayout.vue'

export default {
  name: 'App',

  components: {
    TheHeaderBar,
    TheLayout,
  },

  data: () => ({
    //
  }),
}
</script>

<style>
@import "./assets/css/main.css";
</style>
