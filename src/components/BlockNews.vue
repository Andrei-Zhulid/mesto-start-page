<template>
  <MBlock
    v-bind="data"
    :cols="12"
    :sm="6"
    v-slot="slotProps"
  >
    <BlockNewsCard :news="slotProps.item"/>
  </MBlock>
</template>

<script>
import data from '@/data/blockNews.json'
import BlockNewsCard from '@/components/BlockNewsCard'
import MBlock from '@/components/MBlock'

export default {
  components: {
    MBlock,
    BlockNewsCard,
  },

  data () {
    return {
      data,
    }
  },
}
</script>
