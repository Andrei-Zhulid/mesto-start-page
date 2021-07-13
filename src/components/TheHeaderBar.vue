<template>
  <v-app-bar
    app
    short
    flat
    dark
    class="header"
  >
    <v-container class="container">
      <v-row align="center">
        <v-col class="flex-grow-0">
          <v-img
            :src="require('../assets/logo.svg')"
            alt="Mesto Logo"
            class="logo"
          />
        </v-col>

        <v-spacer></v-spacer>

        <v-col class="flex-grow-0">
          <v-btn
            text
            x-large
            v-ripple="false"
            class="px-0"
          >
            <span>{{ user.name }}</span>
            <v-img
              :src="user.avatar"
              :alt="user.name"
              class="avatar ml-4"
            />
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import data from '@/data.json'

export default {
  data () {
    return {
      user: data.user,
    }
  },
}
</script>

<style scoped>
.header {
  background: var(--background);
}

.container {
  max-width: var(--layout-max-width);
}

.logo {
  height: 24px;
}

.avatar {
  height: 40px;
  width: 40px;
}
</style>
