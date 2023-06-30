<template>
  <div
    v-if="loading"
    class="s-spin-nested-spining"
  >
    <span class="s-spin-dot-group">
      <i class="s-spin-dot-item" />
      <i class="s-spin-dot-item" />
      <i class="s-spin-dot-item" />
      <i class="s-spin-dot-item" />
    </span>
    <div class="s-spin-text">
      <span>正在加载中...</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'StickerLoading'
}
</script>

<script setup lang="ts">
defineProps({
  loading: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="less" scoped>
@-webkit-keyframes vueSpinMove {
  to {
    opacity: 1;
  }
}
@keyframes vueSpinMove {
  to {
    opacity: 1;
  }
}

@-webkit-keyframes vueRotate {
  to {
    transform: rotate(405deg);
  }
}
@keyframes vueRotate {
  to {
    transform: rotate(405deg);
  }
}

.s-spin-nested-spining {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: rgba(252, 252, 252, 0.8);

  & > .s-spin-dot-group {
    display: inline-block;
    width: 20px;
    height: 20px;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -20px -10px;
    transform: rotate(45deg);
    animation: vueRotate 1.2s linear infinite;
    & > .s-spin-dot-item {
      position: absolute;
      display: block;
      width: 9px;
      height: 9px;
      opacity: 0.3;
      border-radius: 100%;
      transform: scale(0.75);
      transform-origin: 50% 50%;
      background-color: #1890ff;
      animation: vueSpinMove 1s linear infinite alternate;
      &:nth-child(1) {
        top: 0;
        left: 0;
      }
      &:nth-child(2) {
        top: 0;
        right: 0;
        animation-delay: 0.4s;
      }
      &:nth-child(3) {
        right: 0;
        bottom: 0;
        animation-delay: 0.8s;
      }
      &:nth-child(4) {
        left: 0;
        bottom: 0;
        animation-delay: 1.2s;
      }
    }
  }

  & > .s-spin-text {
    display: block;
    margin: 0;
    padding: 5px 0 0 0;
    font-size: 12px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    font-feature-settings: 'tnum';
    position: absolute;
    color: #1890ff;
    text-align: center;
    position: absolute;
    top: 50%;
    width: 100%;
    text-shadow: 0 1px 2px #fff;
  }
}
</style>
