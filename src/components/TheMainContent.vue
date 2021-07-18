<template>
  <v-container class="pa-0">
    <v-row>
      <v-col>
        <MestoBanner>
          <!-- Space between two texts -->
          <div class="font-weight-bold text-right">{{
              banner.whiteText
            }} <span class="secondary-color">{{ banner.limeText }}</span>
          </div>
        </MestoBanner>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MestoBanner from '@/components/MestoBanner.vue'
import data from '@/data.json'

export default {
  components: { MestoBanner },

  data () {
    return {
      banner: data.mestoBanner,
    }
  },
}
</script>
