<template>
  <div>
    <MBlockTitle
      :summary="summary"
      :seeAllRoute="seeAllRoute"
    >Ближайшие события
    </MBlockTitle>

    <v-container class="pa-0 pt-4">
      <v-row>
        <v-col
          v-for="(event, i) in events"
          :key="i"
          cols="12"
          sm="6"
          md="4"
        >
          <BlockEventsCard
            :event="event"
            class="fill-height"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import data from '@/data/blockEvents.json'
import MBlockTitle from '@/components/MBlockTitle'
import BlockEventsCard from '@/components/BlockEventsCard'

export default {
  components: {
    BlockEventsCard,
    MBlockTitle,
  },

  data () {
    return {
      summary: data.summary,
      events: data.events,
      seeAllRoute: data.seeAllRoute,
    }
  },
}
</script>

<style scoped>

</style>
