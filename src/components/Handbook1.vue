<template>
  <v-card
    flat
    tile
    class="pa-3 pb-4"
  >
    <v-card-title class="subtitle-1 deep-purple--text pa-3 pb-2">{{ handbook.title }}</v-card-title>
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
            class="bg_grey fill-height no-pseudo-opacity"
          >
            <v-card-text
              class="text--primary body-1"
              style="padding: 10px 16px 11px 16px;"
            >{{ section.title }}
            </v-card-text>
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
