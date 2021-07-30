<template>
  <div>
    <span class="heading text-black">{{ social.title }}</span>
    <div class="mt-4">
      <a
        v-for="(item, index) in items"
        :key="index"
        :href="item.link"
      >
        <component
          :is="item.icon"
          class="mr-2"
        />
      </a>
    </div>
  </div>
</template>

<script>
import data from '@/data/pageStart.json'
import { getIconComponent } from '@/helpers'

export default {
  data () {
    return {
      social: data.social,
    }
  },

  computed: {
    items () {
      return this.social.links.map(item => ({
        ...item,
        icon: getIconComponent(item.icon),
      }))
    },
  },
}
</script>

<style scoped>

</style>
