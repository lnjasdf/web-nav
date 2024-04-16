<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import { ScreenTypeEnum } from "@/interface/sidebar";

const breakpoints = useBreakpoints(breakpointsTailwind);
const smallDrawer = useSmallDrawer();
const openDrawer = useOpenDrawer();
const screenType = useScreenType();
watch(
  breakpoints.active(),
  (active) => {
    switch (active) {
      case "2xl":
      case "xl":
      case "lg":
        screenType.value = ScreenTypeEnum.large;
        smallDrawer.value = false;
        openDrawer.value = true;
        break;
      case "md":
        screenType.value = ScreenTypeEnum.middle;
        smallDrawer.value = true;
        openDrawer.value = true;
        break;
      case "sm":
        screenType.value = ScreenTypeEnum.small;
        smallDrawer.value = false;
        openDrawer.value = false;
        break;
      default:
        screenType.value = ScreenTypeEnum.small;
        smallDrawer.value = false;
        openDrawer.value = false;
    }
  },
  { immediate: true }
);
</script>

<template>
  <!-- <div class="min-h-full bg-base-200" :class="smallDrawer ? 'w-14' : 'w-52'"> -->
  <SidebarContent :isSmall="smallDrawer" />
  <!-- </div> -->
</template>

<style lang="scss" scoped></style>
