<template>
  <MCard
    :title="item.title"
    :to="item.route"
  >
    <MAvatar
      :src="item.author.avatar"
      class="text-body-2 font-weight-bold"
    >{{ item.author.name }}
    </MAvatar>

    <template #footer>
      <div class="d-flex align-center text-body-2 font-weight-bold">
        <CommentsIcon style="margin-right: 2px"/>
        5
        <OkIcon class="ml-2"/>
        5
      </div>
    </template>
  </MCard>
</template>

<script>
import MCard from '@/components/MCard'
import MAvatar from '@/components/MAvatar'
import CommentsIcon from '@/assets/icons/comment.svg'
import OkIcon from '@/assets/icons/Hand_ok.svg'

export default {
  components: {
    MAvatar,
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
