<script setup>
import Post from "./Post.vue"
import Instafeed from "instafeed.js"

// Get access token
let url = `https://instagram.com/oauth/authorize/?client_id=${import.meta.env.INSTAGRAM_CLIENT_ID}&redirect_uri=http://localhost:5173/portfolio/&response_type=token`

var feed = new Instafeed({
    clientId: import.meta.env.INSTAGRAM_CLIENT_ID,
    accessToken: "heyyy",
    target: 'post-container',
    template: '<Post title="{{user}}" />',
    limit: 6,

});

</script>

<template>
  <div id="feed" class="section">
      <div class="container">
        <h1 class="title">Feed</h1>
        <div class="post-container">
            <Post v-for="i in 6" :image_url="'https://picsum.photos/1000?random=' + i" title="Sample" />
        </div>
        <div class="load-more">
            <button class="btn">Load more</button>
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
    .post-container {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        flex-grow: 1 0 33%;
        row-gap: 70px;
        justify-content: space-between;
        width: 100%;
        margin: 50px 0;
    }

    .load-more {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
