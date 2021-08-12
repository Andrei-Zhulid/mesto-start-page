<template>
  <div class="d-flex">
    <v-badge
      :value="!!status"
      :color="status === 'online' ? 'lime' : 'grey-purple'"
      bottom
      dot
      tile
      bordered
      offset-x="7"
      offset-y="7"
    >
      <v-avatar :size="size">
        <v-img :src="src"/>
      </v-avatar>
    </v-badge>

    <div
      v-if="$slots.default"
      class="d-flex align-center text-body-2 font-weight-bold ml-2"
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
    status: {
      type: String,
      validator: (value) => ['online', 'offline'].includes(value),
    },
  },
}
</script>
