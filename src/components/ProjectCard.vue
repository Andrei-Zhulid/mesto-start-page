<template>
  <v-card
    :href="project.link"
    flat
    tile
    v-ripple="false"
    class="fill-height no-pseudo-opacity"
  >
    <v-card-title class="subtitle-1 pb-2">
      <component
        :is="icon"
        class="mr-2"
      />
      {{ project.title }}
    </v-card-title>
    <v-card-text class="card__text_font text--primary">{{ project.description }}</v-card-text>
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
.card__text_font.v-card__text {
  font-size: 13px;
  line-height: 18px;
  letter-spacing: normal;
}
</style>
