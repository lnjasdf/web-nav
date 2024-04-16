<script setup lang="ts">
import { ScreenTypeEnum } from "@/interface/sidebar";
const smallDrawer = useSmallDrawer();
const openDrawer = useOpenDrawer();
const ScreenType = useScreenType();
</script>

<template>
  <div>
    <button class="btn" @click="openDrawer = !openDrawer" v-show="ScreenType === ScreenTypeEnum.small">
      <Icon name="i-heroicons-solid:menu" />
    </button>
    <button
      class="btn"
      @click="smallDrawer = !smallDrawer"
      v-show="ScreenType !== ScreenTypeEnum.small"
    >
      <Icon name="i-heroicons-solid:menu" v-show="smallDrawer" />
      <Icon name="i-heroicons-solid:menu-alt-1" v-show="!smallDrawer" />
    </button>
    header
  </div>
</template>

<style lang="scss" scoped></style>
