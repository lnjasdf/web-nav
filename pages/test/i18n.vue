<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { availableLocales } from "@/availableLocales";

const switchLocalePath = useSwitchLocalePath();
const { t, locale } = useI18n();
</script>

<template>
  <div>
    <div>
      <span>{{ locale }}:{{ t("home") }}</span>
    </div>
    <div>
      <div v-for="lang in availableLocales" :key="lang.iso">
        <NuxtLink :to="switchLocalePath(lang.iso)">
          <span class="truncate">
            {{ lang.name }}
          </span>
          <span class="flex items-center justify-center text-sm">
            <Icon :name="lang.flag" class="text-base" />
          </span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
