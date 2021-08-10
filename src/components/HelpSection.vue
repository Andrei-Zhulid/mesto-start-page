<template>
  <MSection
    v-bind="data"
    :cols="12"
    :sm="6"
    :lg="4"
    v-slot="slotProps"
  >
    <HelpSectionCard
      :item="slotProps.item"
      class="fill-height"
    />
  </MSection>
</template>

<script>
import data from '@/data/Navigator/helpSection.json'
import MSection from '@/components/MSection'
import HelpSectionCard from '@/components/HelpSectionCard'

export default {
  components: {
    MSection,
    HelpSectionCard,
  },

  data () {
    return { data }
  },
}
</script>

<style scoped>

</style>
