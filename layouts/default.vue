<script setup lang="ts">
const openDrawer = useOpenDrawer();
const open = ref()
</script>

<template>
  <div class="drawer md:drawer-open">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" v-model="openDrawer" />
    <div class="drawer-content">
      <!-- Page content here -->
      <label for="my-drawer" class="btn btn-primary drawer-button md:hidden"
        >Open drawer</label
      >
      <TmpHeader />
      <div>
        <slot></slot>
      </div>
      <TmpFooter />
    </div>
    <div id="drawerSide" class="drawer-side">
      <label
        for="my-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <TmpSidebar />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.md\:drawer-open > .drawer-side {
  // TODO 按理说在侧边栏标签里加上 overflow-x-visible 就行，
  // 侧边栏里面的内容就可以使用 dropdown 相关的弹出来，
  // class="drawer-side overflow-x-visible"
  // 但这里不行，所以只能用这个 hack 了
  overflow: visible;
}
</style>
