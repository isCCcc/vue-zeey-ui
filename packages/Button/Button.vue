<script lang="ts" setup>
import { ref } from 'vue';
import { defineOptions } from 'vue';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const showWave = ref(false);
const createWave = async () => {
  showWave.value = true;
  await sleep(600); // 要跟css动画时间一致
  showWave.value = false;
};

defineOptions({
  name: 'z-button' // 组件名称，必须设置
});
</script>

<template>
  <div class="z-button-container">
    <div class="wave" v-if="showWave"></div>
    <button class="z-button" type="button" @click="createWave">
      <slot>button</slot>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.z-button-container {
  --wave-size: 8px;

  position: relative;
  display: flex;
}

.z-button {
  color: #18a058;
  border: 1px solid #18a058;
  border-radius: 5px;
  padding: 10px 20px;
  background-color: #fff;
  width: 100%;
  height: 100%;
}

.wave {
  position: absolute;
  background-color: #18a058;
  opacity: 0.4;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 5px;
  opacity: 0.4;
  transition: all 0.6s ease-in-out;
  animation: wave-animation 0.6s linear;
}

@keyframes wave-animation {
  to {
    top: calc(var(--wave-size) / -2);
    left: calc(var(--wave-size) / -2);
    width: calc(100% + var(--wave-size));
    height: calc(100% + var(--wave-size));
    opacity: 0;
  }
}
</style>
