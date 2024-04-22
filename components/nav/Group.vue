<script setup lang="ts">
import { type IGroup } from "@/interface/nav";
const props = defineProps<{
  data: IGroup;
}>();
</script>

<template>
  <div>
    <h4 class=" text-base md:text-lg font-medium text-neutral-600">{{ data.group_name }}</h4>
    <NavTab :data="props.data.tab_list"></NavTab>
  </div>
</template>

<style lang="scss" scoped></style>
