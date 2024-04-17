<script setup lang="ts">
import { ScreenTypeEnum } from "@/interface/sidebar";
const smallDrawer = useSmallDrawer();
const openDrawer = useOpenDrawer();
const ScreenType = useScreenType();
</script>

<template>
  <div>
    <!-- 是否开关侧边栏 -->
    <Icon
      name="i-heroicons-solid:menu"
      v-show="ScreenType === ScreenTypeEnum.small"
      v-bind="$attrs"
      @click="openDrawer = !openDrawer"
    />
    <!-- 是否缩小侧边栏 -->
    <Icon
      :name="smallDrawer ? 'i-heroicons-solid:menu' : 'i-heroicons-solid:menu-alt-1' "
      v-show=" ScreenType !== ScreenTypeEnum.small"
      v-bind="$attrs"
      @click="smallDrawer = !smallDrawer"
    />
  </div>
</template>

<style lang="scss" scoped></style>
