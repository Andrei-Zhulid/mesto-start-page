<template>
  <v-list class="px-2 py-5">
    <v-list-item
      v-for="(item, i) in items"
      :key="i"
      :to="item.slug"
      v-ripple="false"
      active-class="list-item_active"
      class="list-item_hover_highlight no-pseudo-opacity"
    >
      <v-list-item-icon class="list-item__icon my-0 mr-4">
        <component :is="item.icon"/>
      </v-list-item-icon>

      <v-list-item-content class="py-1">
        <v-list-item-title
          v-text="item.title"
          class="subtitle-1"
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

.list-item_active >>> .v-list-item__title,
.list-item_hover_highlight:hover >>> .v-list-item__title {
  /*noinspection CssUnresolvedCustomProperty*/
  color: var(--v-light-purple-base);
}

/* Exclude icons made by image (e.g. openland.svg) */
.list-item_active >>> path:not([fill^="url"]),
.list-item_hover_highlight:hover >>> path:not([fill^="url"]) {
  /*noinspection CssUnresolvedCustomProperty*/
  fill: var(--v-light-purple-base);
}

/* Apply just for icons made by image (e.g. openland.svg) */
.list-item_active >>> path[fill^="url"],
.list-item_hover_highlight:hover >>> path[fill^="url"] {
  filter: contrast(120%) saturate(200%);
}
</style>
