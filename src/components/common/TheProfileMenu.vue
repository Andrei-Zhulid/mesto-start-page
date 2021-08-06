<template>
  <v-menu
    dark
    tile
    left
    offset-y
    transition="slide-y-transition"
    open-on-hover
    open-on-focus
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        text
        x-large
        v-bind="attrs"
        v-on="on"
        class="user-profile px-0"
      >
        <span class="user-name_dot-after subtitle-1 d-none d-sm-flex mr-4">{{ user.name }}</span>
        <v-avatar
          tile
          size="40"
        >
          <v-img
            :src="user.avatar"
            :alt="user.name"
          />
        </v-avatar>
      </v-btn>
    </template>
    <v-list
      color="deep-purple"
      class="profile-menu"
    >
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :href="item.link"
        class="py-1"
      >
        <component
          :is="item.icon"
          class="mr-2"
        />
        {{ item.title }}
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import data from '@/data/headerBar.json'
import { getIconComponent } from '@/helpers'

export default {
  data () {
    return {
      user: data.user,
      menuItems: data.profileMenu,
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
.user-name_dot-after::after {
  content: ".";
  /*noinspection CssUnresolvedCustomProperty*/
  color: var(--v-lime-base);
}

.user-profile {
  text-transform: none;
  text-indent: 0;
  min-width: unset !important;
  float: right;
}

.profile-menu {
  font-size: 12px;
  line-height: 16px;
  font-weight: bold;
}
</style>
