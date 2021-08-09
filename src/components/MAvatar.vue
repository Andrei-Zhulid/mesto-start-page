<template>
  <div class="d-flex align-center">
    <v-avatar :size="size">
      <v-img :src="src"/>
    </v-avatar>

    <div
      v-if="$slots.default"
      class="text-body-2 font-weight-bold ml-2"
    >
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 24,
    },
  },
}
</script>
