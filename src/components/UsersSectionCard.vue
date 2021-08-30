<template>
  <MCard :to="user.route">
    <div class="d-flex">
      <MStatusBadge :online="user.online">
        <MAvatar
          :src="user.avatar"
          :name="user.name"
          size="46"
        />
      </MStatusBadge>

      <div class="align-self-start d-flex flex-column ml-2">
        <span class="two-lines deep-purple--text text-body-1 font-weight-bold mb-2">{{ user.name }}</span>
        <span class="text--secondary text-body-2 font-weight-medium">{{ user.location }}</span>
      </div>
    </div>

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
import MStatusBadge from '@/components/MStatusBadge'

export default {
  components: {
    MStatusBadge,
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
