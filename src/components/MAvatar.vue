<template>
  <div class="d-flex align-center">
    <v-avatar
      :size="size"
      :class="{ 'overflow-visible': status }"
    >
      <v-img :src="src"/>
      <div
        v-if="status"
        class="status"
        :class="status"
      />
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
    status: {
      type: String,
      validator: (value) => ['online', 'offline'].includes(value),
    },
  },
}
</script>

<style scoped>
.status {
  width: 10px;
  height: 10px;
  position: absolute;
  right: -2px;
  bottom: -2px;
  border-style: solid;
  border-color: white;
  border-width: 2px 0 0 2px;
}

.status.online {
  /*noinspection CssUnresolvedCustomProperty*/
  background: var(--v-lime-base);
}

.status.offline {
  /*noinspection CssUnresolvedCustomProperty*/
  background: var(--v-grey-purple-base);
}
</style>
