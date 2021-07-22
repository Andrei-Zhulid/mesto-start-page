<template>
  <v-list class="px-2 py-5">
    <v-list-item
      v-for="(item, i) in items"
      :key="i"
      :href="item.link"
      v-ripple="false"
      class="no-pseudo-opacity"
    >
      <v-list-item-icon
        class="list-item__icon my-0 mr-4"
      >
        <component :is="item.icon"/>
      </v-list-item-icon>

      <v-list-item-content class="list-item-content">
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
import { getIconComponent } from '@/helpers'

export default {
  data () {
    return {
      menuItems: data.mainMenu,
    }
  },

  computed: {
    items () {
      return this.menuItems.map(item => ({
        ...item,
        icon: getIconComponent(item.icon),
      }))
    },
  },
}
</script>

<style scoped>
.list-item__icon {
  align-self: center;
  height: 20px;
  width: 20px;
  min-width: auto;
}

.list-item-content {
  padding: 3px 0;
}

.list-item-content > .v-list-item__title:hover {
  color: #b85cf0;
}
</style>
