<template>
  <v-sheet
    dark
    class="banner d-flex align-center pa-5"
  >
    <v-img
      :src="require('@/assets/logo-long.svg')"
      position="left"
      contain
      alt="Mesto logo"
      class="logo mr-5"
    />
    <slot></slot>
  </v-sheet>
</template>

<style scoped>
.banner {
  background: var(--background);
}

.logo {
  height: 25px;
  width: 96px;
}
</style>
