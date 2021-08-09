<template>
  <div class="space-after-each-children">
    <Handbook/>
    <BlockNews/>
    <BlockEvents/>
  </div>
</template>

<script>
import Handbook from '@/components/Handbook'
import BlockNews from '@/components/BlockNews'
import BlockEvents from '@/components/BlockEvents'

export default {
  components: {
    Handbook,
    BlockNews,
    BlockEvents,
  },
}
</script>

<style scoped>
.space-after-each-children > * {
  margin-bottom: 24px;
}
</style>
