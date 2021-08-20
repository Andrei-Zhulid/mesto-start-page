<template>
  <MCard
    :title="event.name"
    :subtitle="event.location"
    :to="event.route"
  >
    <template #header>
      <div class="d-flex align-center">
        <div class="text-body-2 font-weight-bold text-no-wrap">
          <span class="deep-purple--text text-capitalize">{{ event.date | dateTimeFormat('ddd MMM D') }}</span>
          &nbsp;<span class="grey-purple--text">/</span>&nbsp;
          <span class="deep-purple--text">{{ event.date | dateTimeFormat('H:mm') }}</span>
        </div>

        <v-spacer/>

        <PlatformTag :tag="event.tag"/>
      </div>
    </template>

    <template #default>
      <MAvatar
        :src="event.host.avatar"
        class="text-body-2 font-weight-bold"
      >{{ event.host.name }}
      </MAvatar>
    </template>

    <template #footer>
      <MAvatar
        v-for="(avatar, i) in event.attendees.slice(0, 2)"
        :key="i"
        :src="avatar"
        class="mr-1"
      />
      <MAvatar
        v-if="event.attendees.length >= 3"
        :src="event.attendees[2]"
      >
        <span
          v-if="event.attendees.length > 3"
          class="ml-n1"
        >+{{ event.attendees.length - 3 }}</span>
      </MAvatar>

      <v-spacer/>

      <MButtonJoin x-small/>
    </template>
  </MCard>
</template>

<script>
import dateTimeFilter from '@/mixins/dateTimeFilter'
import MAvatar from '@/components/MAvatar'
import MButtonJoin from '@/components/MButtonJoin'
import MCard from '@/components/MCard'
import PlatformTag from '@/components/PlatformTag'

export default {
  components: {
    PlatformTag,
    MCard,
    MButtonJoin,
    MAvatar,
  },

  mixins: [dateTimeFilter],

  props: {
    event: {
      type: Object,
      required: true,
    },
  },
}
</script>
