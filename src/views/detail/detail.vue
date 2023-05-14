<template>
  <div class="detail">
    <h2>6666</h2>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
console.log(route.params.id);
</script>

<style lang="less" scoped></style>
