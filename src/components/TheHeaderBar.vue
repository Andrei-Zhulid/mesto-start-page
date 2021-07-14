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
          >{{ data.user.name }}<span class="header__text_secondary-color">.</span>
            <v-img
              :src="data.user.avatar"
              :alt="data.user.name"
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
      data,
    }
  },
}
</script>

<style scoped>
.header {
  background: var(--background);
}

.header__text_secondary-color {
  color: var(--secondary-color);
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
