<script setup>
import { ref } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Post from "./Post.vue"

library.add(faChevronLeft, faChevronRight)

var postCount = ref(3)
var postList = ref([
    {id: 1, image_url: "https://picsum.photos/1000/600?random=1", title: "Sample"},
    {id: 2, image_url: "https://picsum.photos/1000?random=2", title: "Sample"},
    {id: 3, image_url: "https://picsum.photos/1000?random=3", title: "Sample"},
    {id: 4, image_url: "https://picsum.photos/1000?random=4", title: "Sample"},
    {id: 5, image_url: "https://picsum.photos/1000?random=5", title: "Sample"},
    {id: 6, image_url: "https://picsum.photos/1000?random=6", title: "Sample"},
    {id: 7, image_url: "https://picsum.photos/1000?random=7", title: "Sample"},
    {id: 8, image_url: "https://picsum.photos/1000?random=8", title: "Sample"},
])
var btnShowMore = ref(true)
var postFocus = ref("")

const toggleShowMoreFeed = () => {
    if (btnShowMore.value == true) {
        postCount.value = 8;
        btnShowMore.value = false;
        $(".feed-button").text("Show less");
    } else {
        postCount.value = 3;
        btnShowMore.value = true;
        $(".feed-button").text("Show more");
    }
}

const getPosts = () => {
    return postList.value.slice(0, postCount.value);
}

const fullscreenPost = (postId) => {
    let post = postList.value.find(post => post.id == postId);
    postFocus.value = post.image_url;
    $("body").addClass("no-scroll");
    $(".fullscreen-post").addClass("active");
}

const leaveFullscreenPost = () => {
    postFocus.value = "";
    $("body").removeClass("no-scroll");
    $(".fullscreen-post").removeClass("active");
}


</script>

<template>
  <div id="feed" class="section">
      <div class="container">
        <h1 class="title">Feed</h1>
        <div class="fullscreen-post" @click="leaveFullscreenPost">
            <img :src="postFocus" alt="" srcset="">
            <div class="nav-overlay">
                <div class="nav-overlay-container">
                    <div class="nav-overlay-left nav-overlay-btn-container">
                        <font-awesome-icon class="btn-nav-overlay" icon="fa-solid fa-chevron-left" />
                    </div>
                    <div class="nav-overlay-right nav-overlay-btn-container">
                        <font-awesome-icon class="btn-nav-overlay" icon="fa-solid fa-chevron-right" />
                    </div>
                </div>
            </div>
        </div>
        <div class="post-handler">
            <div class="post-container">
                <Post @click="fullscreenPost(id=post.id)" v-for="post in getPosts()" :image_url="post.image_url" :title="post.title" />
            </div>
        </div>
        <div class="toggle-feed">
            <button @click="toggleShowMoreFeed" class="btn feed-button">Show more</button>
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

    .toggle-feed {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .fullscreen-post {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
        z-index: 999;
    }

    .fullscreen-post.active {
        display: flex !important;
        justify-content: center;
        align-items: center;
    }

    .fullscreen-post img {
        max-width: 80%; max-height: 80%;
        object-fit: contain;
        max-width: 50%;
        object-fit: cover;
    }

    .nav-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .nav-overlay-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    .nav-overlay-btn-container {
        width: 50px;
        height: 100px;
        display: flex;
        align-items: center;
        margin: auto 20px;

    }
    .nav-overlay-left {
        justify-content: flex-start;
    }

    .nav-overlay-right {
        justify-content: flex-end;
    }

    .btn-nav-overlay {
        color: #000;
        width: 100%; height: 100%;
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
