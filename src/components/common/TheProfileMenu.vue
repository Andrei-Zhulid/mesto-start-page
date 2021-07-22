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
        class="button-user-profile px-0"
      >
        <span class="user-name_dot-after heading d-none d-sm-flex mr-4">{{ user.name }}</span>
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
    <v-list class="profile-menu-font background-deep-purple">
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
import data from '@/data.json'
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
  color: var(--lime);
}

.button-user-profile {
  text-transform: none;
  text-indent: 0;
  min-width: unset !important;
  float: right;
}

.background-deep-purple.v-list {
  background: var(--deep-purple);
}

.profile-menu-font {
  font-size: 12px;
  line-height: 16px;
  font-weight: bold;
}
</style>
