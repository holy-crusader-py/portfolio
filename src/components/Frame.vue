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
    <div class="frame-content">
      <button class="frame-button">View Project</button>
      <img class="frame-image" :src="image_url" />
    </div>
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
      height: 40px;
  }
  .frame-content {
      width: 100%; height: calc(100% - 40px);
      position: relative;
  }
  .frame-button {
      position: absolute;
      bottom: 10px; right: 10px;
      padding: 0 10px;
      height: 50px;
      border: solid 5px #000;
      background-color: var(--secondary-color);
      color: #000;
      font-size: 1rem;
      font-weight: 600;
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
      display: inline-block;
      position: relative;
  }

  @media screen and (max-width: 850px) {
      .frame {
          width: 100%;
          min-width: initial;
          max-width: 750px;
      }
    }

  @media (pointer:coarse) {
      .frame {
          width: 100%;
          min-width: initial;
          max-width: 750px;
      }
  }
</style>
