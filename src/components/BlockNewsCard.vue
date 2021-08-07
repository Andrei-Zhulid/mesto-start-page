<template>
  <v-card
    :to="{name: news.routeName, params: {id: news.articleId }}"
    v-ripple="false"
    class="no-pseudo-opacity"
  >
    <v-card-title class="text-body-1 font-weight-bold flex-nowrap justify-space-between py-3 pr-2">
      <span class="text-truncate mr-2">{{ news.title }}</span>
      <Icon style="overflow: visible"/>
    </v-card-title>
  </v-card>
</template>

<script>
import Icon from '@/assets/icons/arrow-right.svg'

export default {
  components: { Icon },

  props: {
    news: {
      type: Object,
      required: true,
    },
  },
}
</script>
