<template>
  <div>
    <div class="d-flex ml-n1">
      <v-chip
        v-for="(skill, i) in skills"
        :key="i"
        color="light-grey"
        x-small
        label
        outlined
        class="skill-chip text-caption px-1 ml-1"
      >{{ skill }}
      </v-chip>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skills: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.skill-chip >>> .v-chip__content {
  color: #686868;
}
</style>
