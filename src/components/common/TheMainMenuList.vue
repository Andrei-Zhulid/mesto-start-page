<template>
  <v-list class="px-2 py-5">
    <v-list-item
      v-for="(item, i) in items"
      :key="i"
      :to="item.slug"
      v-ripple="false"
      active-class="list-item__active"
      class="list-item__highlight-on-hover no-pseudo-opacity"
    >
      <v-list-item-icon class="list-item__icon my-0 mr-4">
        <component :is="item.icon"/>
      </v-list-item-icon>

      <v-list-item-content class="list-item__content">
        <v-list-item-title
          v-text="item.title"
          class="heading text-black"
        />
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import data from '@/data/mainMenu.json'
import { getIconComponent } from '@/helpers'

export default {
  data () {
    return {
      menuItems: data.menuItems,
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

.list-item__content {
  padding: 3px 0;
}

.list-item__active >>> .v-list-item__title,
.list-item__highlight-on-hover:hover >>> .v-list-item__title {
  color: var(--ligth-purple);
}

/* Exclude icons made by image (e.g. openland.svg) */
.list-item__active >>> path:not([fill^="url"]),
.list-item__highlight-on-hover:hover >>> path:not([fill^="url"]) {
  fill: var(--ligth-purple);
}

/* Apply just for icons made by image (e.g. openland.svg) */
.list-item__active >>> path[fill^="url"],
.list-item__highlight-on-hover:hover >>> path[fill^="url"] {
  filter: contrast(120%) saturate(200%);
}
</style>
