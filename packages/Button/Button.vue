// Button.vue
<template>
    <button class="z-button" type="button">
      <slot></slot>
    </button>
  </template>

<script lang="ts" setup>
import { defineOptions } from 'vue';

defineOptions({
  name: 'z-button' // 组件名称，必须设置
});
</script>

<style>
  .z-button {
    color: #bc4a78;
    border: 1px solid #bc4a78;
    border-radius: 5px;
    padding: 10px 20px;
    background-color: #fff;
  }
</style>
