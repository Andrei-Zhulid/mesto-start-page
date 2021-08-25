<template>
  <MSection
    v-bind="data"
    :cols="12"
    :sm="6"
    :displayedItemsCount="{ xs: 3, sm: 2 }"
    v-slot="slotProps"
  >
    <NewsSectionCard :news="slotProps.item"/>
  </MSection>
</template>

<script>
import data from '@/data/Navigator/newsSection.json'
import NewsSectionCard from '@/components/NewsSectionCard'
import MSection from '@/components/MSection'

export default {
  components: {
    MSection,
    NewsSectionCard,
  },

  data () {
    return {
      data,
    }
  },
}
</script>
