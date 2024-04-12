<script setup lang="ts">
import { type IGroup } from "@/interface/nav";
import navData from '@/config/nav.json';
const typedData: IGroup[] = navData;
</script>

<template>
  <div class=" m-4">
    <NavGroup v-for="(item,index) in typedData" :key="index" :data="item"></NavGroup>
  </div>
</template>

<style lang="scss" scoped></style>
