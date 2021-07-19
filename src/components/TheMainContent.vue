<template>
  <v-container class="pa-0">
    <v-row>
      <v-col>
        <MestoBanner>
          <!-- Leave the space between two texts -->
          <div class="font-weight-bold text-right">{{
              banner.whiteText
            }} <span class="text-lime">{{ banner.limeText }}</span>
          </div>
        </MestoBanner>
      </v-col>
    </v-row>
    <v-row class="mt-5">
      <v-col
        v-for="(card, i) in cards"
        :key="i"
        cols="12"
        sm="6"
        lg="4"
      >
        <v-card
          :to="card.link"
          flat
          tile
          class="fill-height"
        >
          <v-card-title class="heading text-black pb-2">{{ card.title }}</v-card-title>
          <v-card-text class="normal-text text-black">{{ card.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MestoBanner from '@/components/MestoBanner.vue'
import data from '@/data.json'

export default {
  components: { MestoBanner },

  data () {
    return {
      banner: data.mestoBanner,
      cards: data.cards,
    }
  },
}
</script>

<style scoped>
.v-card >>> .text-black.v-card__text {
  color: var(--black);
}
</style>
