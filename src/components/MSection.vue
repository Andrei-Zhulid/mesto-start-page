<template>
  <div v-if="items">
    <MSectionTitle
      :summary="summary"
      :seeAllRoute="seeAllRoute"
      class="mb-4"
    >{{ title }}
    </MSectionTitle>

    <v-container class="pa-0">
      <v-row>
        <!-- Show the first 3 items -->
        <v-col
          v-for="(item, i) in displayedItems"
          :key="i"
          :cols="cols"
          :sm="sm"
          :md="md"
          :lg="lg"
          :xl="xl"
        >
          <!--suppress HtmlUnknownAttribute -->
          <slot :item="item"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import MSectionTitle from '@/components/MSectionTitle'

const column = {
  type: [Boolean, String, Number],
  default: false,
}

const breakpoints = ['xl', 'lg', 'md', 'sm', 'xs', 'col']

export default {
  components: { MSectionTitle },

  props: {
    summary: Array,
    seeAllRoute: [String, Object],
    title: {
      type: String,
      required: true,
    },
    items: Array,
    // TODO: Add object validation in TypeScript
    displayedItemsCount: {
      type: [Number, Object],
      default: 3,
    },
    cols: column,
    sm: column,
    md: column,
    lg: column,
    xl: column,
  },

  computed: {
    displayedItems () {
      if (!this.items) {
        return []
      } else if (typeof (this.displayedItemsCount) === 'number') {
        return this.items.slice(0, this.displayedItemsCount)
      }

      let itemsCount = this.$props.displayedItemsCount.default
      for (let i = breakpoints.indexOf(this.$vuetify.breakpoint.name); i < breakpoints.length; i++) {
        if (this.displayedItemsCount[breakpoints[i]]) {
          itemsCount = this.displayedItemsCount[breakpoints[i]]
          break
        }
      }

      return this.items.slice(0, itemsCount)
    },
  },
}
</script>
