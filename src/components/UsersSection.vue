<template>
  <MSection
    v-bind="data"
    :cols="12"
    :sm="6"
    :lg="4"
    v-slot="slotProps"
  >
    <UsersSectionCard
      :user="slotProps.item"
      class="fill-height"
    />
  </MSection>
</template>

<script>
import data from '@/data/Navigator/usersSection.json'
import MSection from '@/components/MSection'
import UsersSectionCard from '@/components/UsersSectionCard'

export default {
  components: {
    MSection,
    UsersSectionCard,
  },

  data () {
    return { data }
  },
}
</script>
