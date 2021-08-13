<template>
  <v-expansion-panels
    flat
    tile
  >
    <v-expansion-panel>
      <v-expansion-panel-header class="subtitle-1 deep-purple--text active-on-hover pa-4">
        Справочник Места
        <template #actions>
          <v-icon color="deep-purple">mdi-arrow-down-drop-circle-outline</v-icon>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-container>
          <v-row class="my-n4">
            <v-col
              v-for="(link, i) in links"
              :key="i"
              cols="12"
              sm="6"
              md="4"
              class="pa-0"
            >
              <router-link
                :to="link.route"
                class="text-body-1 text-decoration-none"
              >{{ link.title }}
              </router-link>
            </v-col>
          </v-row>
        </v-container>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import data from '@/data/Navigator/handbook.json'

export default {
  data () {
    return {
      links: data.links,
    }
  },
}
</script>
