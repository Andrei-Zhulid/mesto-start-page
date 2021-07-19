<template>
  <v-card
    flat
    tile
    class="pa-3 pb-4"
  >
    <v-card-title class="heading text-deep-purple pa-3 pb-2">{{ handbook.title }}</v-card-title>
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
            class="background-gray fill-height"
          >
            <v-card-text class="card_padding normal-text-1 text-black">{{ section.title }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import data from '@/data.json'

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
