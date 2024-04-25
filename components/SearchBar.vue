<script setup lang="ts">
import { type ISearchGroup, type ISearchSite } from "@/interface/search";
import searchData from "@/config/search.json";
const typeData = searchData as ISearchGroup[];
const curGroup = ref(0);
const curSite = ref(0);

const handleChangeGroup = (index: number) => {
  curGroup.value = index;
  curSite.value = 0;
};
const handleChangeSite = (index: number) => {
  curSite.value = index;
};
</script>

<template>
  <div class="">
    <ul class="flex justify-center">
      <li
        v-for="(item, index) in typeData"
        :key="index"
        class="text-sm m-4 text-neutral-500"
        @click="handleChangeGroup(index)"
        :class="{ 'border-b-4 border-b-neutral-200': curGroup === index }"
      >
        {{ item.title }}
      </li>
    </ul>
    <label class="input bg-neutral-200 flex items-center gap-2 rounded-full">
      <input type="text" class="grow" placeholder="Search" />
      <Icon name="i-ri:search-line" size="20" />
    </label>
    <div class="flex justify-center">
      <!-- TODO overflow-x-auto 不好使，搜索项太多时，横向滚动未生效 -->
      <ul class="overflow-x-auto">
        <li
          v-for="(item, index) in typeData[curGroup].groups"
          :key="index"
          class="inline-block text-sm m-4 text-neutral-500 relative"
          @click="handleChangeSite(index)"
          :class="{ ' curSite': curSite === index }"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.curSite:before {
  content: "";
  position: absolute;
  top: -6px; /* 根据需要调整 */
  left: calc(50% - 10px);
  border: 10px solid transparent; /* 透明边框 */
  transform: translateY(-50%) rotate(-180deg); /* 调整位置和角度 */
  @apply border-b-neutral-200;
}
</style>
