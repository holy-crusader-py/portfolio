<script setup>
defineProps({
  title: String,
  image_url: String,
});
</script>

<template>
  <div class="post">
    <!-- <div class="post-hover cursor-pointer">
      <div class="post-hover-title">{{ title }}</div>
    </div> -->
    <img class="post-image" :src="image_url" />
  </div>
</template>

<style scoped>
  .post-image {
    height: 428px;
    width: 100%;
    object-fit: cover;
  }
  .post {
    display: block;
    flex-grow: 1;
    height: 428px;
    border: solid 5px #000;
    box-shadow: 8px 8px 0px 0px #000;
    overflow: hidden;
  }

  .post-hover {
      position: absolute;
      top: 0; bottom: 0;
      left: 0; right: 0;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0;
      transition: opacity 300ms;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
      font-weight: 600;
      color: #fff;
  }

  .post-hover:hover {
      opacity: 1;
  }

  @media screen and (max-width: 850px) {
      .post {
          width: 100%;
      }
    }
</style>
