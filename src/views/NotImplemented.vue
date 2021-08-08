<template>
  <div>
    <h1 class="mb-2">Not Implemented</h1>
    <p>Route name: {{ $route.name }}</p>
    <p>Route params: {{ $route.params }}</p>
    <router-link
      :to="{ name: 'Home' }"
      class="subtitle-1 deep-purple--text"
    >Home
    </router-link>
  </div>
</template>

<script>
export default {}
</script>
