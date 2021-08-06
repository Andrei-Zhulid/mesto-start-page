<template>
  <v-expansion-panels
    flat
    tile
  >
    <v-expansion-panel>
      <v-expansion-panel-header class="subtitle-1 deep-purple--text pa-4">
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
                :to="{ name: link.routeName }"
                class="link_font"
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
import data from '@/data/handbook.json'

export default {
  data () {
    return {
      links: data.links,
    }
  },
}
</script>

<style scoped>
.link_font {
  font-size: 14px;
  line-height: 19px;
  letter-spacing: normal;
  text-decoration: none;
}
</style>
