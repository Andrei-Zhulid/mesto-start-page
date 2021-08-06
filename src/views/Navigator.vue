<template>
  <div>
    <Handbook class="mb-6"/>
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
