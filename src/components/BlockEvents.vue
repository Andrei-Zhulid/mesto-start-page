<template>
  <MBlock
    v-bind="data"
    :cols="12"
    :sm="6"
    :lg="4"
    v-slot="slotProps"
  >
    <BlockEventsCard
      :event="slotProps.item"
      class="fill-height"
    />
  </MBlock>
</template>

<script>
import data from '@/data/blockEvents.json'
import BlockEventsCard from '@/components/BlockEventsCard'
import MBlock from '@/components/MBlock'

export default {
  components: {
    MBlock,
    BlockEventsCard,
  },

  data () {
    return {
      data,
    }
  },
}
</script>
