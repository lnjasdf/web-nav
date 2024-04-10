<script setup lang="ts">
// const props = withDefaults(defineProps<{ small: string, large: string}>(), {
//   small: 'w-16',
//   large: 'w-52'
// });
const largeDrawer = useLargeDrawer();
const drawerState = ref("");
watch(largeDrawer, (newValue) => {
  console.log("largeDrawer", newValue);
  if (newValue) {
    drawerState.value = "w-52";
  } else {
    drawerState.value = "";
  }
});
</script>

<template>
  <div class="md:w-14 lg:w-52 min-h-full bg-base-200" :class="drawerState">
    <ul class="menu p-4 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
