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
  <div>
    <div role="tablist" class="tabs justify-start my-2">
      <a
        :id="tab.id"
        v-for="(tab, index) in props.data"
        :key="tab.id"
        role="tab"
        class="tab"
        @click="handleTabClick(index)"
        :class="{ 'tab-active': index === tabShowed }"
        >{{ tab.title }}</a
      >
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

<style lang="scss" module>
.tab-active {
  background-color: aqua;
}
</style>
