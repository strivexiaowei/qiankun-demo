<template>
    <div>
        这是vue子应用About
        <img src="/images-vue/waiting.png" alt="">
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
    </div>
</template>
<script lang="ts" setup>
import { defineComponent, ref, reactive, watch, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { MenuProps } from "ant-design-vue";
import { useStore } from "vuex";
</script>
  
<style lang="scss"></style>
  