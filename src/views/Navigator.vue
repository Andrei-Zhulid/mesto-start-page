<template>
  <div class="space-after-each-children">
    <Handbook/>
    <BlockNews/>
  </div>
</template>

<script>
import BlockNews from '@/components/BlockNews'
import Handbook from '@/components/Handbook'

export default {
  components: {
    Handbook,
    BlockNews,
  },
}
</script>

<style scoped>
.space-after-each-children > * {
  margin-bottom: 24px;
}
</style>
