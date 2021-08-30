<template>
  <v-card
    :to="to"
    v-ripple="false"
    class="no-pseudo-opacity d-flex flex-column pa-4"
  >
    <div class="d-flex flex-column flex-grow-1">
      <div
        v-if="$slots.header"
        class="mb-2"
      >
        <slot name="header"/>
      </div>

      <div
        v-if="title"
        class="two-lines text-subtitle-1 flex-grow-1"
      >{{ title }}
      </div>

      <!-- div needs to add necessary margin in accordance with the design (5px top and 2px bottom) -->
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
    </div>

    <v-footer
      v-if="$slots.footer"
      color="white"
      class="mt-4 pa-0"
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
