<template>
  <div class="space-after-each-children">
    <Handbook/>
    <NewsSection/>
    <EventsSection/>
    <HelpSection/>
    <UsersSection/>
  </div>
</template>

<script>
import Handbook from '@/components/Handbook'
import NewsSection from '@/components/NewsSection'
import EventsSection from '@/components/EventsSection'
import HelpSection from '@/components/HelpSection'
import UsersSection from '@/components/UsersSection'

export default {
  components: {
    UsersSection,
    Handbook,
    NewsSection,
    EventsSection,
    HelpSection,
  },
}
</script>

<style scoped>
.space-after-each-children > * {
  margin-bottom: 24px;
}
</style>
