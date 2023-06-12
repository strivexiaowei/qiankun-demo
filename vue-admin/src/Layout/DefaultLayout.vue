<template>
  <div class="common-layout">
    <el-container style="height: 100vh;">
      <el-header style="background-color: #545c64;">Header</el-header>
      <el-container>
        <el-aside width="200px" style="background-color: #545c64;">
          <router-link to="/" style="display: block;cursor: pointer; padding: 10px;color: #fff;">首页</router-link>
          <router-link to="/app-vue"
            style="display: block;cursor: pointer; padding: 10px;color: #fff;">vue-app</router-link>
          <router-link to="/app-react"
            style="display: block;cursor: pointer; padding: 10px;color: #fff;">react-app</router-link>
          <router-link to="/app-angualr"
            style="display: block;cursor: pointer; padding: 10px;color: #fff;">angular-app</router-link>
          <router-link to="/app-html"
            style="display: block;cursor: pointer; padding: 10px;color: #fff;">html-app</router-link>
        </el-aside>
        <el-main>
          <template v-if="currentRoute.meta.isAdmin">
            <router-view v-slot="{ Component }">
              <keep-alive :include="includeList">
                <component :is="Component" />
              </keep-alive>
            </router-view>
          </template>
          <template v-else>
            <div id="view-main"></div>
          </template>
        </el-main>
      </el-container>
    </el-container>
  </div>
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
import { onMounted } from 'vue';
import { start } from 'qiankun'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const { currentRoute } = useRouter()
const includeList = ref<Array<string>>([])

onMounted(() => {
  if (!(window as any).qiankunStarted) {
    (window as any).qiankunStarted = true
    start({ sandbox: { experimentalStyleIsolation: true, singular: false } });
  }
})

</script>
