<script setup>
defineProps({
  title: String,
});
</script>

<template>
  <div class="post">
    <h1>{{ title }}</h1>
  </div>
</template>

<style scoped>
    .post {
        width: 320px; height: 320px;
        border: solid 5px #000;
        box-shadow: 8px 8px 0px 0px #000;
    }
</style>
