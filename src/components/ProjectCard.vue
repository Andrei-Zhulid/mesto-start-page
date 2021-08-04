<template>
  <v-card
    :href="project.link"
    flat
    tile
    v-ripple="false"
    class="fill-height no-pseudo-opacity"
  >
    <v-card-title class="text-black subtitle-1 pb-2">
      <component
        :is="icon"
        class="mr-2"
      />
      {{ project.title }}
    </v-card-title>
    <v-card-text class="card_text">{{ project.description }}</v-card-text>
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
.card_text.v-card__text {
  font-size: 13px;
  line-height: 18px;
  letter-spacing: normal;
  color: var(--black);
}
</style>
