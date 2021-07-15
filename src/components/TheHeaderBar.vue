<template>
  <v-app-bar
    app
    short
    flat
    dark
    class="header"
  >
    <v-container class="container">
      <v-row align="center">
        <v-col cols="3">
          <v-img
            :src="require('../assets/logo.svg')"
            position="left"
            contain
            alt="Mesto Logo"
            class="logo"
          />
        </v-col>

        <v-col cols="6">
          <div class="search px-4 pt-1">
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
          cols="3"
          class="d-flex justify-end overflow-hidden"
        >
          <div class="pointer d-flex align-center font-weight-bold text-no-wrap">{{
              data.user.name
            }}<span class="header__text_secondary-color">.</span>
            <v-img
              :src="data.user.avatar"
              :alt="data.user.name"
              contain
              class="avatar ml-4"
            />
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

.header__text_secondary-color {
  color: var(--secondary-color);
}

.container {
  max-width: var(--layout-max-width);
}

.logo {
  height: 24px;
}

.search {
  background: rgba(255, 255, 255, 0.1);
  height: 40px;
  width: 552px;
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
