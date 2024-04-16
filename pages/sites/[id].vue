<script setup lang="ts">
const route = useRoute();
const id = route.params.id
</script>

<template>
  <div>{{ id }} {{ $route.params.id }}</div>
</template>

<style lang="scss" module></style>
