<script setup lang="ts">
import { type ITab } from "@/interface/nav";
const props = defineProps<{
  data: ITab[];
}>();
const tabShowed = ref(0);
const tabsState = ref(
  Array.from({ length: props.data.length }, (ele, index) =>
    index === 0 ? true : false
  )
);
function handleTabClick(index: number) {
  tabShowed.value = index;
  for (let i = 0; i < tabsState.value.length; i++) {
    i === index ? (tabsState.value[i] = true) : (tabsState.value[i] = false);
  }
}
</script>

<template>
  <div>
    <div role="tablist" class="tabs justify-start my-2">
      <a
        v-for="(tab, index) in props.data"
        :key="index"
        role="tab"
        class="tab"
        @click="handleTabClick(index)"
        :class="{ 'tab-active': tabsState[index] }"
        >{{ tab.tab_name }}</a
      >
    </div>
    <div
      class="grid gap-4 justify-items-stretch grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6"
    >
      <NavCard
        v-for="(detail, index) in data[tabShowed].details"
        :key="index"
        :data="detail"
      ></NavCard>
    </div>
  </div>
</template>

<style lang="scss" module>
.tab-active {
  background-color: aqua;
}
</style>
