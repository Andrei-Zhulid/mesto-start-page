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
      <MCardAuthor :author="event.host"/>
    </template>

    <template #footer>
      <div
        v-if="event.attendees"
        class="d-flex flex-nowrap align-center"
      >
        <MAvatar
          v-for="(attendee, i) in event.attendees.slice(0, 3)"
          :key="i"
          :src="attendee.avatar"
          :name="attendee.name"
          size="24"
          class="mr-1"
        />
        <span
          v-if="event.attendees.length >= 3"
          class="text-body-2 font-weight-bold"
        >+{{ event.attendees.length - 3 }}</span>
      </div>

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
import MCardAuthor from '@/components/MCardAuthor'

export default {
  components: {
    MCardAuthor,
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
