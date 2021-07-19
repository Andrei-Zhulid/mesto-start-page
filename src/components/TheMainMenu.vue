<template>
  <v-list class="px-2 py-5">
    <v-list-item
      v-for="(item, i) in items"
      :key="i"
      href="#"
    >
      <v-list-item-content class="py-1">
        <v-list-item-title
          v-text="item.title"
          class="heading text-black"
        />
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import data from '@/data.json'

export default {
  data () {
    return {
      items: data.mainMenu,
    }
  },
}
</script>

<style scoped>
</style>
