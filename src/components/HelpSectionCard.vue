<template>
  <MCard
    :title="item.title"
    :to="item.route"
  >
    <MCardAuthor :author="item.author"/>

    <template #footer>
      <div class="d-flex align-center text-body-2 font-weight-bold">
        <CommentsIcon style="margin-right: 2px"/>
        {{ item.comments }}
        <OkIcon class="ml-2"/>
        {{ item.reactions }}
      </div>
    </template>
  </MCard>
</template>

<script>
import MCard from '@/components/MCard'
import CommentsIcon from '@/assets/icons/comment.svg'
import OkIcon from '@/assets/icons/Hand_ok.svg'
import MCardAuthor from '@/components/MCardAuthor'

export default {
  components: {
    MCardAuthor,
    MCard,
    CommentsIcon,
    OkIcon,
  },

  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>
