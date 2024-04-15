<script setup lang="ts">
import { type IGroup, type ITab } from "@/interface/nav";
import navData from "@/config/nav.json";
const typedData: IGroup[] = navData;
const props = defineProps<{
  isSmall: boolean;
}>();
const menuOpened = ref(-1);
function handleMenuClick(index: number) {
  if (menuOpened.value !== index) {
    menuOpened.value = index;
  } else {
    menuOpened.value = -1;
  }
  //   menuOpened.value = index;
}
</script>

<template>
  <div>
    <ul
      class="menu bg-base-200 w-48 rounded-box"
      v-for="(item, index) in typedData"
      :key="index"
    >
      <li>
        <span
          class="menu-dropdown-toggle"
          :class="{
            'menu-dropdown-show': index === menuOpened,
          }"
          @click="handleMenuClick(index)"
          >{{ item.group_name }}</span
        >
        <ul
          class="menu-dropdown"
          :class="{
            'menu-dropdown-show': index === menuOpened,
          }"
        >
          <li v-for="(tab, index) in item.tab_list" :key="index">
            <a>{{ tab.tab_name }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" module></style>
