<template>
  <v-app>
    <TheHeaderBar />
    <v-main>
    </v-main>
  </v-app>
</template>

<script>
import TheHeaderBar from '@/components/TheHeaderBar'

export default {
  name: 'App',

  components: {
    TheHeaderBar,
  },

  data: () => ({
    //
  }),
}
</script>

<style>
@import "./assets/css/main.css";
</style>
