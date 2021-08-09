<template>
  <v-card class="pa-4 pb-10">
    <div class="d-flex align-center mb-2">
      <div class="text-body-2 font-weight-bold text-no-wrap">
        <span class="deep-purple--text text-capitalize">{{ event.date | dateTimeFormat('ddd MMM D') }}</span>
        &nbsp;<span class="grey-purple--text">/</span>&nbsp;
        <span class="deep-purple--text">{{ event.date | dateTimeFormat('H:mm') }}</span>
      </div>
      <v-spacer/>
      <v-chip
        v-if="event.tag"
        color="lime"
        label
        x-small
        class="tag_font px-1"
      >{{ event.tag }}
      </v-chip>
    </div>

    <span class="two-lines text-subtitle-1 mb-2">{{ event.name }}</span>

    <MAvatar
      :src="event.host.avatar"
      class="text-body-2 font-weight-bold mb-4"
    >{{ event.host.name }}
    </MAvatar>

    <v-footer
      color="white"
      absolute
      class="pa-4 pt-0"
    >
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
    </v-footer>
  </v-card>
</template>

<script>
import dateTimeFilter from '@/mixins/dateTimeFilter'
import MAvatar from '@/components/MAvatar'
import MButtonJoin from '@/components/MButtonJoin'

export default {
  components: {
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

<style scoped>
/* Styles if a browser doesn't support -webkit-line-clamp */
.two-lines {
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

/* Styles if a browser supports -webkit-line-clamp. Should be placed below .two-line class to overwrite it. */
@supports (-webkit-line-clamp: 2) {
  .two-lines {
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}

.tag_font.v-chip {
  font-weight: 500;
  font-size: 11px;
  line-height: 14px;
  letter-spacing: normal;
}
</style>
