<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="includeList">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>
<style lang="scss">
.common-layout {
  height: 100vh;
}
</style>

<script setup lang="ts">
import { watch, } from '@vue/runtime-core'
import { useRoute, useRouter } from "vue-router";
import { ref } from 'vue';
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const includeList = ref<Array<string>>([])


</script>
