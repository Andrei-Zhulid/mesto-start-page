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
            <TheMainMenuList/>
          </v-sheet>
        </v-col>
        <v-col
          md="9"
          cols="12"
        >
          <PageStart/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TheMainMenuList from '@/components/common/TheMainMenuList.vue'
import PageStart from '@/components/pages/PageStart.vue'

export default {
  components: {
    TheMainMenuList,
    PageStart,
  },
}
</script>
