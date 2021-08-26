<template>
  <v-card
    :to="user.route"
    v-ripple="false"
    class="no-pseudo-opacity pa-4"
  >
    <MAvatar
      :src="user.avatar"
      :size="46"
      :status="user.online ? 'online' : 'offline'"
      class="mb-3"
    >
      <div class="align-self-start d-flex flex-column ml-1">
        <span class="two-lines deep-purple--text text-body-1 font-weight-bold mb-2">{{ user.name }}</span>
        <span class="text--secondary font-weight-medium">{{ user.location }}</span>
      </div>
    </MAvatar>

    <SkillSet :skills="user.skills"/>
  </v-card>
</template>

<script>
import MAvatar from '@/components/MAvatar'
import SkillSet from '@/components/SkillSet'

export default {
  components: {
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
