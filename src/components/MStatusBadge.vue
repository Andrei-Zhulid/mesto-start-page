<template>
  <div>
    <v-badge
      :color="online ? 'lime' : 'grey-purple'"
      bottom
      dot
      tile
      bordered
      offset-x="7"
      offset-y="7"
    >
      <slot/>
    </v-badge>
  </div>
</template>

<script>
export default {
  props: {
    online: {
      type: Boolean,
      required: true,
    },
  },
}
</script>
