<template>
  <v-container class="pa-0">
    <v-row class="mb-n1">
      <v-col>
        <MestoBanner class="font-weight-bold">{{
            banner.whiteText
          }}&nbsp;<span class="text-lime">{{ banner.limeText }}</span>
        </MestoBanner>
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
    <v-row>
      <v-col>
        <MestoHandbook/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MestoBanner from '@/components/MestoBanner.vue'
import MestoHandbook from '@/components/MestoHandbook'
import ProjectCard from '@/components/ProjectCard'
import data from '@/data.json'

export default {
  components: {
    ProjectCard,
    MestoHandbook,
    MestoBanner,
  },

  data () {
    return {
      banner: data.mestoBanner,
      projects: data.projects,
    }
  },
}
</script>
