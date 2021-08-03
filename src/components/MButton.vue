<template>
  <v-btn
    v-bind="$attrs"
    tile
    dark
    elevation="0"
    class="background-deep-purple-gradient px-6"
  >
    <slot/>
  </v-btn>
</template>

<script>
export default {
  inheritAttrs: false,
}
</script>
