<template>
  <v-btn
    v-bind="$attrs"
    tile
    dark
    elevation="0"
    class="bg_purple_gradient px-6"
  >
    <slot/>
  </v-btn>
</template>

<script>
export default {}
</script>
