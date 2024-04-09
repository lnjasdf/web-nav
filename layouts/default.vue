<script setup lang="ts"></script>

<template>
  <div class="drawer md:drawer-open">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
      <label for="my-drawer" class="btn btn-primary drawer-button lg:hidden"
        >Open drawer</label
      >
      <TmpHeader />
      <div>
        <slot></slot>
      </div>
      <TmpFooter />
    </div>
    <div class="drawer-side">
      <label
        for="my-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <TmpSidebar />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
