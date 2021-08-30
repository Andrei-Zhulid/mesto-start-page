<template>
  <div class="d-flex align-center">
    <MAvatar
      size="24"
      :name="author.name"
      :src="author.avatar"
    />

    <span class="text-truncate text-body-2 font-weight-bold ml-2">{{ author.name }}</span>
  </div>
</template>

<script>
import MAvatar from '@/components/MAvatar'

export default {
  components: { MAvatar },
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
}
</script>
