<script setup lang="ts">
import { type IGroup } from "@/interface/nav";
import navData from '@/config/nav.json';
const typedData: IGroup[] = navData;
</script>

<template>
  <div class=" space-y-7">
    <NavGroup v-for="(item,index) in typedData" :key="index" :data="item"></NavGroup>
  </div>
</template>

<style lang="scss" scoped></style>
