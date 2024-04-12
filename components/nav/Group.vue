<script setup lang="ts">
import { type IGroup } from "@/interface/nav";
const props = defineProps<{
  data: IGroup;
}>();
</script>

<template>
  <div>
    <NavTab :data="props.data.tab_list" :group-name="data.group_name"></NavTab>
  </div>
</template>

<style lang="scss" scoped></style>
