// Button.vue
<template>
    <button class="MyButton" type="button">
      <slot></slot>
    </button>
  </template>

<script lang="ts">
  export default {
    name: 'MyButton', //组件名称，必须设置
    data () {
      return {}
    },
    methods: {},
    filters: {},
    created () {}
  }
</script>

<style>
  .MyButton {
    color: #bc4a78;
    border: 1px solid #bc4a78;
    border-radius: 5px;
    padding: 10px 20px;
    background-color: #fff;
  }
</style>
