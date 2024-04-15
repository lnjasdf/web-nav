<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);
const smallDrawer = useSmallDrawer();
const drawerIsSmall = ref(false);
watch(
  breakpoints.active(),
  (active) => {
    switch (active) {
      case "2xl":
      case "xl":
        break;
      case "lg":
        drawerIsSmall.value = smallDrawer.value ? true : false;
        break;
      case "md":
        drawerIsSmall.value = true;
        break;
      case "sm":
        drawerIsSmall.value = false;
        break;
      default:
        drawerIsSmall.value = false;
    }
  },
  { immediate: true }
);
watch(smallDrawer, (small) => {
  if (small) {
    drawerIsSmall.value = true;
  } else {
    drawerIsSmall.value = false;
  }
});
</script>

<template>
  <div
    class="min-h-full bg-base-200"
    :class="drawerIsSmall ? 'w-14' : 'w-52'"
  >
    <SidebarContent :isSmall="drawerIsSmall" />
  </div>
</template>

<style lang="scss" scoped></style>
