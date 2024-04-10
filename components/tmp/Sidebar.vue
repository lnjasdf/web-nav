<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);
const smallDrawer = useSmallDrawer();
const drawerState = ref("");
watch(
  breakpoints.active(),
  (active) => {
    switch (active) {
      case "2xl":
      case "xl":
        break;
      case "lg":
        drawerState.value = smallDrawer.value ? "w-14" : "w-52";
        break;
      case "md":
        drawerState.value = "w-14";
        break;
      case "sm":
        drawerState.value = "w-52";
        break;
      default:
        drawerState.value = "w-52";
    }
  },
  { immediate: true }
);
watch(smallDrawer, (small) => {
  if (small) {
    drawerState.value = "w-14";
  } else {
    drawerState.value = "w-52";
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
