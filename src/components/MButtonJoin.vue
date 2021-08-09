<template>
  <v-btn
    v-bind="$attrs"
    @click="registerToEvent"
    color="light-grey"
    elevation="0"
    tile
    class="d-flex deep-purple--text font-weight-bold px-2"
  >
    <GoingIcon
      class="button__icon"
      style="margin: 0 6px 2px 0"
    />
    <span>Иду!</span>
  </v-btn>
</template>

<script>
import GoingIcon from '@/assets/icons/Going.svg'

export default {
  components: { GoingIcon },

  methods: {
    registerToEvent () {
      alert('You are registered to the event')
    },
  },
}
</script>

<style scoped>
.button__icon {
  height: 20px;
  width: 20px;
}
</style>
