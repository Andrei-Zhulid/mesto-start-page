<template>
  <v-container class="pa-0">
    <v-row>
      <v-col>
        <MestoBanner>
          <!-- Leave the space between two texts -->
          <div class="font-weight-bold text-right">{{
              banner.whiteText
            }} <span class="text-lime">{{ banner.limeText }}</span>
          </div>
        </MestoBanner>
      </v-col>
    </v-row>
    <v-row class="mt-5">
      <v-col
        v-for="(project, i) in projects"
        :key="i"
        cols="12"
        sm="6"
        lg="4"
      >
        <v-card
          :href="project.link"
          flat
          tile
          class="fill-height"
        >
          <v-card-title class="heading text-black pb-2">{{ project.title }}</v-card-title>
          <v-card-text class="normal-text-2 text-black">{{ project.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MestoBanner from '@/components/MestoBanner.vue'
import data from '@/data.json'

export default {
  components: { MestoBanner },

  data () {
    return {
      banner: data.mestoBanner,
      projects: data.projects,
    }
  },
}
</script>

<style scoped>
.v-card >>> .text-black.v-card__text {
  color: var(--black);
}
</style>
