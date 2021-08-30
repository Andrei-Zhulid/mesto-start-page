<template>
  <v-avatar
    v-bind="$attrs"
    color="deep-purple"
  >
    <v-img
      v-if="src"
      :src="src"
      :alt="name"
    />
    <span
      v-else
      class="text-body-2 text-uppercase lime--text"
    >{{ initials }}</span>
  </v-avatar>
</template>

<script>
export default {
  props: {
    src: String,
    name: {
      type: String,
      required: true,
      validator: (value) => /\p{L}/u.test(value), // Name should contain at least one letter
    },
  },

  computed: {
    initials () {
      return this.name.match(/\b(\w)/g).slice(0, 2).join('') // Get the first two initials
    },
  },
}
</script>
