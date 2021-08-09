<template>
  <div>
    <MBlockTitle
      :summary="summary"
      :seeAllRoute="seeAllRoute"
      class="mb-4"
    >{{ title }}
    </MBlockTitle>

    <v-container class="pa-0">
      <v-row>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          :cols="cols"
          :sm="sm"
          :md="md"
          :lg="lg"
          :xl="xl"
        >
          <slot :item="item"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import MBlockTitle from '@/components/MBlockTitle'

const column = {
  type: [Boolean, Number],
  default: false,
}

export default {
  components: { MBlockTitle },

  props: {
    summary: Array,
    seeAllRoute: [String, Object],
    title: {
      type: String,
      required: true,
    },
    items: Array,
    cols: column,
    sm: column,
    md: column,
    lg: column,
    xl: column,
  },
}
</script>
