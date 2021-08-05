<template>
  <v-card
    :to="{name: news.routeName, params: {id: news.articleId }}"
    flat
    tile
    v-ripple="false"
    class="m-no-pseudo-opacity"
  >
    <v-card-title class="flex-nowrap justify-space-between py-3 pr-2">
      <span class="m-title text-truncate mr-2">{{ news.title }}</span>
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

<style scoped>
.m-title {
  color: var(--black);
  font-size: 14px;
  font-weight: bold;
  line-height: 19px;
  letter-spacing: normal;
  text-decoration: none;
}
</style>
