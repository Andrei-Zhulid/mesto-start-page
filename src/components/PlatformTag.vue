<template>
  <v-chip
    v-if="tag"
    :color="tagColor"
    dark
    label
    x-small
    class="text-caption no-pseudo-opacity px-1"
  >{{ tag }}
  </v-chip>
</template>

<script>
const colors = {
  zoom: '#2B59FF',
  youtube: '#F90F0F',
}

export default {
  props: {
    tag: {
      type: String,
      validator: (value) => ['zoom', 'youtube'].includes(value.toLowerCase()),
    },
  },

  computed: {
    tagColor () {
      return colors[this.tag.toLowerCase()]
    },
  },
}
</script>
