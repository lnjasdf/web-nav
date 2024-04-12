<script setup lang="ts">
import { type ITabDetails } from "@/interface/nav";
const props = defineProps<{
  data: ITabDetails;
}>();
</script>

<template>
  <div class="flex flex-wrap bg-red-100">
    <div><NuxtImg :src="data.icon.trim().length > 0 ? data.icon : '/icons/default.svg'" width="20" height="20"/></div>
    <div>
      <h4>{{ data.title }}</h4>
      <p>{{ data.description }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
