<template>
  <v-app-bar
    app
    short
    flat
    dark
    class="header"
  >
    <v-container class="container px-0">
      <v-row align="center">
        <v-col
          md="3"
          class="d-flex align-center flex-grow-0"
        >
          <v-app-bar-nav-icon class="d-md-none mr-3 ml-n3">
            <v-img
              :src="require('../assets/open-menu.svg')"
              contain
              alt="Open menu"
              class="header__icon"
            />
          </v-app-bar-nav-icon>
          <v-img
            :src="require('../assets/logo.svg')"
            position="left"
            contain
            alt="Mesto Logo"
            class="header__icon"
          />
        </v-col>

        <v-col md="6">
          <div class="search d-none d-sm-flex px-4 pt-1">
            <v-text-field
              :placeholder="data.searchPlaceholder"
              hide-details
              v-ripple="false"
              class="search__input_no-underline"
            >
              <v-icon
                slot="append"
                size="18"
                class="pt-1"
              >mdi-magnify
              </v-icon>
            </v-text-field>
          </div>
        </v-col>

        <v-col
          md="3"
          class="d-flex justify-end flex-grow-0"
        >
          <div class="overflow-hidden">
            <div class="pointer d-flex align-center font-weight-bold text-no-wrap">
              <v-btn
                icon
                class="d-flex d-sm-none mr-n3"
              >
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
              <span class="header__user-name d-none d-sm-flex">{{ data.user.name }}</span>
              <v-img
                :src="data.user.avatar"
                :alt="data.user.name"
                contain
                class="avatar ml-4"
              />
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import data from '@/data.json'

export default {
  data () {
    return {
      data,
    }
  },
}
</script>

<style scoped>
.header {
  background: var(--background);
}

.header__icon {
  height: 24px;
}

.header__user-name::after {
  content: ".";
  color: var(--secondary-color);
}

.container {
  max-width: var(--layout-max-width);
  min-width: var(--layout-min-width);
}

.search {
  background: rgba(255, 255, 255, 0.1);
  height: 40px;
}

/deep/ .search__input_no-underline.v-input .v-input__slot::before,
/deep/ .search__input_no-underline.v-input .v-input__slot::after {
  border-style: none;
}

/deep/ .search__input_no-underline.v-input input::placeholder {
  color: white;
}

.avatar {
  height: 40px;
  width: 40px;
}
</style>
