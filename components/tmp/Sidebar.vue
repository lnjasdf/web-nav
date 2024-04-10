<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);
const largeDrawer = useLargeDrawer();
const drawerState = ref("");
watch(
  breakpoints.active(),
  (active) => {
    switch (active) {
      case "md":
        drawerState.value = "w-14";
        largeDrawer.value = false;
        break;
      case "lg":
        drawerState.value = "w-52";
        largeDrawer.value = true;
        break;
      default:
        drawerState.value = "w-52";
        largeDrawer.value = true;
    }
  },
  { immediate: true }
);
watch(largeDrawer, (large) => {
  if (large) {
    drawerState.value = "w-52";
  } else {
    drawerState.value = "w-14";
  }
});
</script>

<template>
  <div class="min-h-full bg-base-200" :class="drawerState">
    <ul class="menu p-4 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
