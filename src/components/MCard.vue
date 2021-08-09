<template>
  <v-card
    :to="to"
    v-ripple="false"
    class="no-pseudo-opacity pa-4"
    :class="$slots.footer ? 'pb-14' : ''"
  >
    <slot name="header"/>

    <div :class="$slots.header ? 'mt-2' : ''">
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
    to: Object,
  },
}
</script>
