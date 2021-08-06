<template>
  <v-app-bar
    app
    short
    flat
    dark
    class="bg_deep-purple_gradient px-2"
  >
    <v-container class="layout_width px-0">
      <v-row align="center">
        <v-col
          md="3"
          class="d-flex align-center flex-grow-0"
        >
          <v-menu
            tile
            offset-y
            transition="slide-y-transition"
            open-on-hover
            open-on-focus
          >
            <template v-slot:activator="{ on, attrs }">
              <v-app-bar-nav-icon
                v-bind="attrs"
                v-on="on"
                class="d-md-none mr-3 ml-n3"
              >
                <OpenMenuIcon/>
              </v-app-bar-nav-icon>
            </template>

            <TheMainMenuList/>
          </v-menu>

          <a href="/">
            <Logo class="d-flex"/>
          </a>
        </v-col>

        <v-col md="6">
          <v-sheet
            height="40"
            color="rgba(255, 255, 255, 0.1)"
            class="px-4 pt-1"
          >
            <v-text-field
              :placeholder="searchPlaceholder"
              hide-details
              autocomplete="off"
              v-ripple="false"
              class="text-field_no-underline text-field__placeholder_white"
              style="font-weight: 500"
            >
              <v-icon
                slot="append"
                size="18"
                class="pt-1"
                style="cursor: pointer"
              >mdi-magnify
              </v-icon>
            </v-text-field>
          </v-sheet>
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
import data from '@/data/headerBar.json'
import TheMainMenuList from '@/components/common/TheMainMenuList'
import TheProfileMenu from '@/components/common/TheProfileMenu'
import OpenMenuIcon from '@/assets/icons/open-menu.svg'
import Logo from '@/assets/logo.svg'

export default {
  components: {
    TheMainMenuList,
    TheProfileMenu,
    OpenMenuIcon,
    Logo,
  },

  data () {
    return {
      searchPlaceholder: data.searchPlaceholder,
    }
  },
}
</script>

<style scoped>
.text-field_no-underline.v-input >>> .v-input__slot::before,
.text-field_no-underline.v-input >>> .v-input__slot::after {
  border-style: none;
}

.text-field__placeholder_white.v-input >>> input::placeholder {
  color: white;
}
</style>
