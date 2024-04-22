<script setup lang="ts">
import { type ITabDetails } from "@/interface/nav";
const props = defineProps<{
  data: ITabDetails;
}>();
const iconSize = ref(40);
</script>

<template>
  <div class="tooltip tooltip-bottom grid grid-cols-[auto_1fr] bg-white p-4 rounded" :data-tip="data.description">
    <div class="grid place-self-center rounded-full overflow-hidden mr-2  bg-green-200 w-10 h-10">
      <NuxtImg
        :src="data.icon.trim().length > 0 ? data.icon : '/icons/default.svg'"
        :width="iconSize"
        :height="iconSize"
        class=" object-cover object-center "
      />
    </div>
    <div class="truncate text-left">
      <h4 class="truncate text-sm font-bold">{{ data.title }}</h4>
      <p class="truncate text-xs font-normal text-gray-500">{{ data.description }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
