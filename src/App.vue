<template>
  <v-app>
    <TheHeaderBar/>
    <v-main>
      <TheLayout>
        <router-view/>
      </TheLayout>
    </v-main>
  </v-app>
</template>

<script>
import TheHeaderBar from '@/components/common/TheHeaderBar'
import TheLayout from '@/components/common/TheLayout.vue'

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
