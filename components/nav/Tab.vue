<script setup lang="ts">
import { type ITab } from "@/interface/nav";
const props = defineProps<{
  data: ITab[];
  groupName: string
}>();
</script>

<template>
  <div>
    <div v-for="(tab, index) in props.data" :key="index">
      <div>
        <h4 class=" inline">{{ groupName }}</h4>
        {{ tab.tab_name }}
      </div>
      <div
        class="grid gap-4 justify-items-stretch grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6"
      >
        <NavCard
          v-for="(detail, index) in tab.details"
          :key="index"
          :data="detail"
        ></NavCard>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
