<script setup lang="ts">
const smallDrawer = useSmallDrawer();
const openDrawer = useOpenDrawer();
</script>

<template>
  <div>
    header
    <button @click="openDrawer = !openDrawer" class="btn btn-primary">
      openDrawer
    </button>
    <button @click="smallDrawer = !smallDrawer" class="btn btn-primary">
      smallDrawer
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
