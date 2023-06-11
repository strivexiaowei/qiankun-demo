<template>
    <div>
        这是vue子应用About
    </div>
</template>
<script lang="ts" setup>
import { defineComponent, ref, reactive, watch, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { MenuProps } from "ant-design-vue";
import { useStore } from "vuex";
</script>
  
<style lang="scss"></style>
  