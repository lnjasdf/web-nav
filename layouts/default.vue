<script setup lang="ts">
const openDrawer = useOpenDrawer();
const open = ref()
</script>

<template>
  <div class="drawer md:drawer-open">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" v-model="openDrawer" />
    <div class="drawer-content">
      <!-- Page content here -->
      <label for="my-drawer" class="btn btn-primary drawer-button md:hidden"
        >Open drawer</label
      >
      <TmpHeader />
      <div>
        <slot></slot>
      </div>
      <TmpFooter />
    </div>
    <div class="drawer-side">
      <label
        for="my-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <TmpSidebar />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
