<template>
  <v-card
    :href="project.link"
    flat
    tile
    v-ripple="false"
    class="fill-height no-pseudo-opacity description-black"
  >
    <v-card-title class="heading text-black pb-2">
      <component
        :is="icon"
        class="mr-2"
      />
      {{ project.title }}
    </v-card-title>
    <v-card-text class="normal-text-2 text-black">{{ project.description }}</v-card-text>
  </v-card>
</template>

<script>
import { getIconComponent } from '@/helpers'

export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },

  computed: {
    icon () {
      return getIconComponent(this.project.icon)
    },
  },
}
</script>

<style scoped>
.description-black.v-card >>> .text-black {
  color: var(--black);
}
</style>
