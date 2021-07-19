<template>
  <div class="pa-6">
    <v-container class="layout-width pa-0">
      <v-row>
        <v-col
          md="3"
          align-self="start"
          class="d-none d-md-flex"
        >
          <v-sheet class="flex-grow-1">
            <TheMainMenu/>
          </v-sheet>
        </v-col>
        <v-col
          md="9"
          cols="12"
        >
          <TheMainContent/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TheMainMenu from '@/components/TheMainMenu.vue'
import TheMainContent from '@/components/TheMainContent.vue'

export default {
  components: {
    TheMainMenu,
    TheMainContent,
  },
}
</script>
