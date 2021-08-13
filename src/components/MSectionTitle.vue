<template>
  <div class="d-flex align-center justify-space-between">
    <div class="d-flex align-center">
      <router-link
        :to="seeAllRoute"
        class="title_font deep-purple--text text-decoration-none active-on-hover mr-3"
      >
        <slot/>
      </router-link>
      <template v-for="(item, i) in summary">
        <span
          :key="'t'+i"
          class="text-body-2 text--secondary mr-1"
        >{{ item.title }}:</span>
        <router-link
          :key="'n'+i"
          :to="item.route"
          class="text-body-2 font-weight-medium deep-purple--text text-decoration-none active-on-hover mr-1"
        >{{ item.number }}
        </router-link>
      </template>
    </div>

    <router-link
      :to="seeAllRoute"
      class="link_font active-on-hover"
    >Смотреть все
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    summary: Array,
    seeAllRoute: Object,
  },
}
</script>

<style scoped>
.title_font {
  font-size: 20px;
  font-weight: bold;
  line-height: 27px;
  letter-spacing: normal;
}

.link_font {
  font-size: 13px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: normal;
}
</style>
