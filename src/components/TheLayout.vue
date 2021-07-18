<template>
  <div class="pa-6">
    <v-container class="layout-width pa-0">
      <v-row>
        <v-col md="3">
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
import TheMainContent from '@/components/TheMainContent.vue'

export default {
  components: {
    TheMainContent,
  },
}
</script>
