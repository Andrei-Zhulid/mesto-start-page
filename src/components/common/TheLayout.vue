<template>
  <div class="pa-6">
    <v-container class="layout_width pa-0">
      <v-row>
        <v-col
          v-if="$vuetify.breakpoint.mdAndUp"
          md="3"
          align-self="start"
          class="d-none d-md-flex"
        >
          <v-sheet class="flex-grow-1">
            <TheMainMenuList/>
          </v-sheet>
        </v-col>
        <v-col>
          <slot/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TheMainMenuList from '@/components/common/TheMainMenuList.vue'

export default {
  components: { TheMainMenuList },
}
</script>
