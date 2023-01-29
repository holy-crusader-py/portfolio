<script setup>
defineProps({
  title: String,
  image_url: String,
});
</script>

<template>
  <div class="frame">
    <div class="frame-header">
      <div class="dots">
        <div v-for="_ in 2" class="dot"></div>
      </div>
      <h2 class="frame-title">{{ title }}</h2>
    </div>
    <img class="frame-image" :src="image_url" />
  </div>
</template>

<style scoped>
  .frame-image {
      width: 100%; height: 100%;
      object-fit: cover;
  }
  .frame-header {
      border-bottom: solid 5px #000;
      display: flex;
      flex-flow: row nowrap;
      justify-content: left;
      gap: 10px;
      background-color: var(--secondary-color);
  }
  .dots {
      display: flex;
      flex-flow: row nowrap;
      justify-content: left;
      align-items: center;
      gap: 7px;
      margin: 10px;
  }
  .dot {
      width: 16px; height: 16px;
      border-radius: 50%;
      background-color: #bebebe;
      border: solid 4px #000;
  }

  .frame-title {
      font-size: 1.5rem;
      font-weight: 600;
  }
  .frame {
      width: 750px; height: 450px;
      min-width: 750px; 
      border: solid 5px #000;
      box-shadow: 8px 8px 0px 0px #000;
      overflow: hidden;
  }

  @media screen and (max-width: 850px) {
      .post {
          width: 100%;
          height: 100%;
      }
    }
</style>
