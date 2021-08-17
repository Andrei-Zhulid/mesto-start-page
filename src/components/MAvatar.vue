<template>
  <div class="d-flex">
    <component
      :is="wrapper"
      v-bind="wrapperProps"
    >
      <v-avatar
        :size="size"
        class="d-flex"
      >
        <v-img :src="src"/>
      </v-avatar>
    </component>

    <div
      v-if="$slots.default"
      class="d-flex align-center text-body-2 font-weight-bold ml-2"
    >
      <slot/>
    </div>
  </div>
</template>

<script>
import MStatusBadge from '@/components/MStatusBadge'

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

  computed: {
    wrapper () {
      return this.status ? MStatusBadge : 'div'
    },
    wrapperProps () {
      return this.status ? { online: this.status === 'online' } : {}
    },
  },
}
</script>
