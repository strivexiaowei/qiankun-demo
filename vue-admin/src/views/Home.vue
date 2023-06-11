<template>
  <div class="page">
    这是主应用主页
  </div>
</template>
<script lang="ts" setup>
import { defineComponent, ref, reactive, watch, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { MenuProps } from "ant-design-vue";
import { useStore } from "vuex";
</script>

<style lang="less">
.ant-menu-item-selected {
  color: #fff !important;
}

.user-wrap {
  .user-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
  }

  .user-info {
    cursor: pointer;
  }

  .user-name {
    font-weight: bold;
    font-size: 16px;
    color: #1e2843;
  }

  .user-sub-txt {
    font-size: 14px;
    color: #8c8c8c;
  }
}
.setting-wrap {
  width: 110px;
  padding: 10px;
  cursor: pointer;
}

.overlay-setting {
  padding: 0 20px;
  background: #fff;
  font-size: 16px;
  color: #1e2843;
  border: 1px solid rgba(63, 209, 116, 0.5);
  border-radius: 5px;
  cursor: pointer;
}

.btn-out-login {
  padding: 10px 0;
  border-bottom: 1px solid #c9f3d3;

  &:last-child {
    border: none;
  }
  &:hover {
    color: #38c66d;
  }
}

.num-tag {
  margin-left: 10px;
  padding: 0 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1;
  color: #fff;
  background: #eb6100;
  border-radius: 8px;
}
</style>
