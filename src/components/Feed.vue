<script setup>
import { ref } from 'vue'
import Post from "./Post.vue"

var posts = ref(3)
var btnShowMore = ref(true)

const showMore = () => {
    posts.value = 8;
    btnShowMore.value = false;
}

</script>

<template>
  <div id="feed" class="section">
      <div class="container">
        <h1 class="title">Feed</h1>
        <div class="post-handler">
            <div class="post-container">
                <Post v-for="i in posts" :image_url="'https://picsum.photos/1000?random=' + i" title="Sample" />
            </div>
        </div>
        <div v-if="btnShowMore" class="load-more">
            <button @click="showMore" class="btn">Show more</button>
        </div>
    </div>
  </div>
</template>

<style scoped>
    #feed {
        background-color: var(--secondary-color);
    }
    .title {
        font-size: 4rem;
    }
    .post-handler {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 100px 0;
    }
    .post-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 80px;
    }

    .load-more {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: 1250px) {
        .post-container {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (max-width: 850px) {
        .post-container {
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>
