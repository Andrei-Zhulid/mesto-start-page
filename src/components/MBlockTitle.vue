<template>
  <div class="d-flex align-center justify-space-between">
    <div class="d-flex align-center">
      <span class="m-title mr-3">
        <slot/>
      </span>
      <template v-for="(item, i) in summary">
        <span
          :key="'t'+i"
          class="m-details mr-1"
        >{{ item.title }}:</span>
        <span
          :key="'n'+i"
          class="m-number mr-1"
        >{{ item.number }}</span>
      </template>
    </div>

    <router-link
      :to="seeAllRoute"
      class="m-link"
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
.m-title {
  color: var(--deep-purple);
  font-size: 20px;
  font-weight: bold;
  line-height: 27px;
  letter-spacing: normal;
}

.m-details {
  color: var(--gray);
  font-size: 12px;
  line-height: 15px;
  letter-spacing: normal;
}

.m-number {
  color: var(--deep-purple);
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: normal;
}

.m-link {
  font-size: 13px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: normal;
  color: var(--black);
}
</style>
