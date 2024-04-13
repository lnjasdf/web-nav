<script setup lang="ts">
import { type ITabDetails } from "@/interface/nav";
const props = defineProps<{
  data: ITabDetails;
}>();
const iconSize = ref(40);
</script>

<template>
  <div class="grid grid-cols-[auto_1fr]  bg-red-100">
    <div class="grid place-items-center">
      <NuxtImg
        :src="data.icon.trim().length > 0 ? data.icon : '/icons/default.svg'"
        :width="iconSize"
        :height="iconSize"
        class=""
      />
    </div>
    <div class="truncate">
      <h4 class="truncate">{{ data.title }}</h4>
      <p class="truncate">{{ data.description }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
