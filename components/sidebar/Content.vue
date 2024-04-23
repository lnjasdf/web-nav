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
  <div class="min-h-full" :class="isSmall ? 'w-14' : 'w-52'">
    <ul
      class="rounded-box"
      :class="{
        menu: !isSmall,
      }"
      v-for="(item, index) in typedData"
      :key="item.id"
    >
      <li
        :class="{
          'dropdown dropdown-hover dropdown-right': isSmall,
        }"
      >
        <span
          :class="{
            'menu-dropdown-show': index === menuOpened && !isSmall,
            'menu-dropdown-toggle': !isSmall,
          }"
          @click="handleMenuClick(index)"
        >
          <Icon name="i-mdi:account-box-outline" size="30" />
          <p v-show="!isSmall">{{ item.title }}</p>
        </span>
        <ul
          :class="{
            'menu-dropdown-show': index === menuOpened && !isSmall,
            'menu-dropdown': !isSmall,
            'dropdown-content menu shadow bg-base-100 p-0 rounded-box w-52 overflow-hidden':
              isSmall,
          }"
        >
          <li class="bg-slate-300" v-show="isSmall">
            <a>{{ item.title }}</a>
          </li>
          <li v-for="tab in item.tabs" :key="tab.id">
            <a>{{ tab.title }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
