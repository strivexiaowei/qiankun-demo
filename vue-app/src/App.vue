<!--
 * @Author: your name
 * @Date: 2022-03-24 10:09:59
 * @LastEditTime: 2022-03-30 10:11:59
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-vue-app\src\App.vue
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs

import DefaultLayout from './Layout/DefaultLayout.vue';

// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import { ref } from 'vue-demi';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');
const locale = ref(zhCN)
</script>
<template>
    <a-config-provider :locale="locale">
        <DefaultLayout></DefaultLayout>
    </a-config-provider>
</template>
<style></style>
