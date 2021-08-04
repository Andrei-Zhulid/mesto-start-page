<template>
  <v-card
    flat
    tile
    class="pa-3 pb-4"
  >
    <v-card-title class="m-text_deep-purple subtitle-1 pa-3 pb-2">{{ handbook.title }}</v-card-title>
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
            class="m-background_gray fill-height m-no-pseudo-opacity"
          >
            <v-card-text
              class="m-text_black body-1"
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
