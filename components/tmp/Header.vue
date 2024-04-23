<script setup lang="ts">
import { ScreenTypeEnum } from "@/interface/sidebar";
const smallDrawer = useSmallDrawer();
const openDrawer = useOpenDrawer();
const ScreenType = useScreenType();
</script>

<template>
  <div class="h-12 md:h-20 flex flex-wrap content-center">
    <TmpSideBarToggle class=" w-8 h-8"/>
    header
  </div>
</template>

<style lang="scss" scoped></style>
