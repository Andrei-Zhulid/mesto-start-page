<template>
  <div class="space-after-each-children">
    <Handbook/>
    <NewsSection/>
    <EventsSection/>
  </div>
</template>

<script>
import Handbook from '@/components/Handbook'
import NewsSection from '@/components/NewsSection'
import EventsSection from '@/components/EventsSection'

export default {
  components: {
    Handbook,
    NewsSection,
    EventsSection,
  },
}
</script>

<style scoped>
.space-after-each-children > * {
  margin-bottom: 24px;
}
</style>
