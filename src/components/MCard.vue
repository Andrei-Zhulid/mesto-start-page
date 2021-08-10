<template>
  <v-card
    :to="to"
    v-ripple="false"
    class="no-pseudo-opacity pa-4"
    :class="$slots.footer ? 'pb-15' : ''"
  >
    <slot name="header"/>

    <div
      v-if="title || $slots.title"
      :class="$slots.header ? 'mt-2' : ''"
    >
      <slot name="title">
        <span
          v-if="title"
          class="two-lines text-subtitle-1 mb-2"
        >{{ title }}</span>
      </slot>
    </div>

    <div
      v-if="$slots.default"
      :class="$slots.header || $slots.title ? 'mt-2' : ''"
    >
      <slot/>
    </div>

    <v-footer
      v-if="$slots.footer"
      color="white"
      absolute
      class="pa-4 pt-0"
    >
      <slot name="footer"/>
    </v-footer>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
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
