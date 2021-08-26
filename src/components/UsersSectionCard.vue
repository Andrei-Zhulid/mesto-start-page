<template>
  <MCard :to="user.route">
    <MAvatar
      :src="user.avatar"
      :size="46"
      :status="user.online ? 'online' : 'offline'"
    >
      <div class="align-self-start d-flex flex-column ml-1">
        <span class="two-lines deep-purple--text text-body-1 font-weight-bold mb-2">{{ user.name }}</span>
        <span class="text--secondary font-weight-medium">{{ user.location }}</span>
      </div>
    </MAvatar>

    <template #footer>
      <SkillSet
        :skills="user.skills"
        class="text-truncate flex-grow-1"
        style="mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0));"
      />
    </template>
  </MCard>
</template>

<script>
import MAvatar from '@/components/MAvatar'
import SkillSet from '@/components/SkillSet'
import MCard from '@/components/MCard'

export default {
  components: {
    MCard,
    SkillSet,
    MAvatar,
  },

  props: {
    user: {
      type: Object,
      required: true,
    },
  },
}
</script>
