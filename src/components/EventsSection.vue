<template>
  <MSection
    v-bind="data"
    :cols="12"
    :sm="6"
    :lg="4"
    v-slot="slotProps"
  >
    <EventsSectionCard
      :event="slotProps.item"
      class="fill-height"
    />
  </MSection>
</template>

<script>
import data from '@/data/Navigator/eventsSection.json'
import EventsSectionCard from '@/components/EventsSectionCard'
import MSection from '@/components/MSection'

export default {
  components: {
    MSection,
    EventsSectionCard,
  },

  data () {
    return {
      data,
    }
  },
}
</script>
