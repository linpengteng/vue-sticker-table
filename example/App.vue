<template>
  <section>
    <h2>Vue Sticker Table </h2>
    <table-empty />
    <table-loading />
    <table-normal />
    <table-fixed-header />
    <table-fixed-left />
    <table-fixed-left-and-right />
    <table-fixed-all />
    <table-fixed-all-and-paginate />
  </section>
</template>

<script lang="ts">
export default {
  name: 'TableDemo'
}
</script>

<script setup lang="ts">
</script>

<style lang="less" scoped>
section {
  width: 100%;
  box-sizing: border-box;
}
</style>
