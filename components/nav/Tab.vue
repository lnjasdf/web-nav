<script setup lang="ts">
import { type ITab } from "@/interface/nav";
const props = defineProps<{
  data: ITab[];
}>();
</script>

<template>
  <!-- <div
    class="grid gap-4 justify-items-stretch grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6"
  > -->
  <div>
    <div
      v-for="(tab, index) in props.data"
      :key="index"
      class="bg-white p-2 rounded-lg"
    >
      <NavCard
        v-for="(detail, index) in tab.details"
        :key="index"
        :data="detail"
      ></NavCard>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
