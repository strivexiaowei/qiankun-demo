<template>
  <div id="view-main" class="page">

  </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
import { start } from 'qiankun'

onMounted(() => {
  if (!(window as any).qiankunStarted) {
    (window as any).qiankunStarted = true
    start({ sandbox: { experimentalStyleIsolation: true, singular: false } });
  }
})

</script>
<style lang="less"></style>
  