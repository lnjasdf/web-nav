<script setup lang="ts">
import { ScreenTypeEnum } from "@/interface/sidebar";
const smallDrawer = useSmallDrawer();
const openDrawer = useOpenDrawer();
const ScreenType = useScreenType();
</script>

<template>
  <div class="h-12 md:h-20 ">
    <TmpSideBarToggle />
    header
  </div>
</template>

<style lang="scss" scoped></style>
