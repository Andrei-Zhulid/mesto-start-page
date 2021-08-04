<template>
  <v-card
    flat
    tile
    class="pa-3 pb-4"
  >
    <v-card-title class="text-deep-purple subtitle-1 pa-3 pb-2">{{ handbook.title }}</v-card-title>
    <v-container>
      <v-row>
        <v-col
          v-for="(section, i) in handbook.sections"
          :key="i"
          cols="12"
          sm="6"
          class="py-2"
        >
          <v-card
            :href="section.link"
            flat
            tile
            v-ripple="false"
            class="background-gray fill-height no-pseudo-opacity"
          >
            <v-card-text class="card_padding body-1 text-black">{{ section.title }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import data from '@/data/viewStart.json'

export default {
  data () {
    return {
      handbook: data.handbook,
    }
  },
}
</script>

<style scoped>
.card_padding {
  padding: 10px 16px 11px 16px;
}
</style>
