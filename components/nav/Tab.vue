<script setup lang="ts">
import { type ITab } from "@/interface/nav";
const props = defineProps<{
  data: ITab[];
}>();
const tabShowed = ref(0);
function handleTabClick(index: number) {
  tabShowed.value = index;
}
</script>

<template>
  <div class="space-y-4">
    <div class="flex">
      <div
        role="tablist"
        class="tabs justify-start my-2 bg-neutral-200 p-1 rounded-full"
      >
        <a
          :id="tab.id"
          v-for="(tab, index) in props.data"
          :key="tab.id"
          role="tab"
          class="tab text-neutral-500 rounded-full"
          @click="handleTabClick(index)"
          :class="{ 'tab-active': index === tabShowed }"
          >{{ tab.title }}</a
        >
      </div>
    </div>
    <div
      class="grid gap-7 justify-items-stretch grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6"
    >
      <NavCard
        v-for="site in data[tabShowed].sites"
        :key="site.id"
        :data="site"
      ></NavCard>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tab-active {
  @apply text-white bg-blue-600;
}
</style>
