<template>
  <div class="d-flex align-center justify-space-between">
    <div class="d-flex align-center">
      <span class="title_font deep-purple--text mr-3">
        <slot/>
      </span>
      <template v-for="(item, i) in summary">
        <span
          :key="'t'+i"
          class="details_font text--secondary mr-1"
        >{{ item.title }}:</span>
        <span
          :key="'n'+i"
          class="number_font deep-purple--text mr-1"
        >{{ item.number }}</span>
      </template>
    </div>

    <router-link
      :to="seeAllRoute"
      class="link_font"
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

.details_font {
  font-size: 12px;
  line-height: 15px;
  letter-spacing: normal;
}

.number_font {
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: normal;
}

.link_font {
  font-size: 13px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: normal;
}
</style>
