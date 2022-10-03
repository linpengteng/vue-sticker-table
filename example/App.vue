<template>
  <section>
    <h2>Vue Sticker Table</h2>

    <div class="demo-container">
      <van-tabs v-model:active="active">
        <van-tab
          class="111"
          title="无数据"
        >
          <table-empty />
        </van-tab>

        <van-tab title="加载中">
          <table-loading />
        </van-tab>

        <van-tab title="正常表格">
          <table-normal />
        </van-tab>

        <van-tab title="表头固定">
          <table-fixed-header />
        </van-tab>

        <van-tab title="左列固定">
          <table-fixed-left />
        </van-tab>

        <van-tab title="左右列固定">
          <table-fixed-left-and-right />
        </van-tab>

        <van-tab title="表头/左右列固定">
          <table-fixed-all />
        </van-tab>

        <van-tab title="表头/左右列固定 + 分页">
          <table-fixed-all-and-paginate />
        </van-tab>
      </van-tabs>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'TableDemo'
}
</script>

<script setup lang="ts">
import { ref } from 'vue'
const active = ref(2)
</script>

<style lang="less" scoped>
section {
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 960px;
  margin: 0 auto;
  flex-flow: column nowrap;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  h2 {
    flex: 0 0 auto;
    height: 130px;
    line-height: 180px;
    border-bottom: dashed 1px #cfcfcf;
    background-color: #ffffff;
    overflow: hidden;
    position: relative;
    z-index: 10;
  }

  .demo-container {
    flex: 1 1 auto;
    width: 100%;
    overflow: auto;
    box-sizing: border-box;
    position: relative;
    z-index: 1;

    &::-webkit-scrollbar,
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    :deep(.van-tabs__content) {
      padding: 0 3%;
      box-sizing: border-box;
    }
  }
}
</style>
