<template>
  <v-app-bar
    app
    short
    flat
    dark
    class="background-deep-purple-gradient px-2"
  >
    <v-container class="layout-width px-0">
      <v-row align="center">
        <v-col
          md="3"
          class="d-flex align-center flex-grow-0"
        >
          <v-app-bar-nav-icon class="d-md-none mr-3 ml-n3">
            <v-img
              :src="require('@/assets/icons/open-menu.svg')"
              contain
              alt="Open menu"
              class="icon"
            />
          </v-app-bar-nav-icon>
          <v-img
            :src="require('@/assets/logo.svg')"
            position="left"
            contain
            alt="Mesto Logo"
            class="icon"
          />
        </v-col>

        <v-col md="6">
          <div class="search d-none d-sm-flex px-4 pt-1">
            <v-text-field
              :placeholder="data.searchPlaceholder"
              hide-details
              v-ripple="false"
              class="text-field_no-underline text-field_white-placeholder"
            >
              <v-icon
                slot="append"
                size="18"
                class="pointer pt-1"
              >mdi-magnify
              </v-icon>
            </v-text-field>
          </div>
        </v-col>

        <v-col
          md="3"
          class="d-flex align-center justify-end flex-grow-0"
        >
          <v-btn
            icon
            class="d-flex d-sm-none mr-1"
          >
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <div class="overflow-hidden">
            <TheProfileMenu/>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import data from '@/data.json'
import TheProfileMenu from '@/components/TheProfileMenu'

export default {
  components: { TheProfileMenu },
  data () {
    return {
      data,
    }
  },
}
</script>

<style scoped>
.icon {
  height: 24px;
}

.search {
  background: rgba(255, 255, 255, 0.1);
  height: 40px;
}

.text-field_no-underline.v-input >>> .v-input__slot::before,
.text-field_no-underline.v-input >>> .v-input__slot::after {
  border-style: none;
}

.text-field_white-placeholder.v-input >>> input::placeholder {
  color: white;
}
</style>
