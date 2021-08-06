<template>
  <div>
    <MBlockTitle
      :summary="summary"
      :seeAllRoute="{ name: 'NotFound'}"
    >Новости
    </MBlockTitle>

    <v-container class="pa-0 pt-4">
      <v-row>
        <v-col
          v-for="(news, i) in newsItems"
          :key="i"
          cols="12"
          sm="6"
        >
          <BlockNewsCard :news="news"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import data from '@/data/blockNews.json'
import MBlockTitle from '@/components/MBlockTitle'
import BlockNewsCard from '@/components/BlockNewsCard'

export default {
  components: {
    BlockNewsCard,
    MBlockTitle,
  },

  data () {
    return {
      newsItems: data.news,
      summary: data.summary,
    }
  },
}
</script>
