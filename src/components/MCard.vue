<template>
  <v-card
    :to="to"
    v-ripple="false"
    class="no-pseudo-opacity d-flex flex-column pa-4"
  >
    <div
      v-if="$slots.header"
      class="mb-2"
    >
      <slot name="header"/>
    </div>

    <span
      v-if="title"
      class="two-lines text-subtitle-1 flex-grow-1"
    >{{ title }}</span>

    <div v-if="subtitle">
      <span
        :class="{ 'mt-1': title }"
        class="text--secondary text-body-2 font-weight-medium"
      >{{ subtitle }}</span>
    </div>

    <div
      v-if="$slots.default"
      :class="{ 'mt-2': title || subtitle }"
    >
      <slot/>
    </div>

    <v-footer
      v-if="$slots.footer"
      color="white"
      class="pa-0 pt-4"
    >
      <slot name="footer"/>
    </v-footer>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    to: [String, Object],
  },
}
</script>

<style scoped>
/* Styles if a browser doesn't support -webkit-line-clamp */
.two-lines {
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

/* Styles if a browser supports -webkit-line-clamp. Should be placed below .two-line class to overwrite it. */
@supports (-webkit-line-clamp: 2) {
  .two-lines {
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
