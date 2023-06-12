<template>
  <div>
    <router-link to="/about">关于</router-link> | 
    <router-link to="/user">个人中心</router-link>
    这是vue子应用
  </div>
</template>
<script lang="ts" setup>
import { defineComponent, ref, reactive, watch, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { MenuProps } from "ant-design-vue";
import { useStore } from "vuex";
</script>

<style lang="scss">

</style>
