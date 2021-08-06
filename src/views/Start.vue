<template>
  <v-container class="pa-0">
    <v-row class="mb-n1">
      <v-col>
        <MBanner class="font-weight-bold">{{
            banner.whiteText
          }}&nbsp;<span class="m-text_lime">{{ banner.limeText }}</span>
        </MBanner>
      </v-col>
    </v-row>
    <v-row class="mb-5">
      <v-col
        v-for="(project, i) in projects"
        :key="i"
        cols="12"
        sm="6"
        lg="4"
      >
        <ProjectCard :project="project"/>
      </v-col>
    </v-row>
    <v-row class="mb-5">
      <v-col>
        <Handbook/>
      </v-col>
    </v-row>
    <v-row class="mb-2">
      <v-col>
        <SocialLinks/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MBanner from '@/components/MBanner.vue'
import Handbook from '@/components/Handbook1'
import ProjectCard from '@/components/ProjectCard'
import SocialLinks from '@/components/SocialLinks'
import data from '@/data/viewStart.json'

export default {
  components: {
    ProjectCard,
    Handbook,
    MBanner,
    SocialLinks,
  },

  data () {
    return {
      banner: data.mestoBanner,
      projects: data.projects,
    }
  },
}
</script>
