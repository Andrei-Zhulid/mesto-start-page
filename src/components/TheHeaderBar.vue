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
      </v-row>
    </v-container>
  </v-app-bar>
</template>

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
</style>
