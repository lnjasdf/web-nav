<script setup lang="ts">
const smallDrawer = useSmallDrawer();
const openDrawer = useOpenDrawer();
</script>

<template>
  <div
    class="grid gap-4 justify-items-stretch grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6"
  >
    <NavCard></NavCard>
    <button @click="openDrawer = !openDrawer" class="btn btn-primary">
      openDrawer
    </button>
    <button @click="smallDrawer = !smallDrawer" class="btn btn-primary">
      smallDrawer
    </button>
    <NavCard></NavCard>
    <NavCard></NavCard>
    <NavCard></NavCard>
    <NavCard></NavCard>
    <NavCard></NavCard>
    <NavCard></NavCard>
    <NavCard></NavCard>
  </div>
</template>

<style lang="scss" scoped></style>
