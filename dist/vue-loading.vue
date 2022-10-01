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

<script>
export default {
  name: 'StickerLoading',
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
@import "./vue-loading.less";
</style>
