<script setup lang="ts">
import { type IGroup } from "@/interface/nav";
const props = defineProps<{
  data: IGroup;
}>();
</script>

<template>
  <div>
    <h4 :id="data.id" class=" text-base md:text-lg font-medium text-neutral-600">{{ data.title }}</h4>
    <NavTab :data="props.data.tabs"></NavTab>
  </div>
</template>

<style lang="scss" scoped></style>
