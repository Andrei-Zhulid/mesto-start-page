<template>
  <v-sheet
    dark
    class="background-deep-purple-gradient d-flex align-center justify-space-between pa-5"
  >
    <div class="mr-5">
      <LogoLong class="d-flex"/>
    </div>
    <div>
      <slot/>
    </div>
  </v-sheet>
</template>

<script>
import LogoLong from '@/assets/logo-long.svg'

export default {
  components: { LogoLong },
}
</script>
