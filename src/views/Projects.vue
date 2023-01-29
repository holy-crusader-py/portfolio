<script setup>
import Frame from "../components/Frame.vue";
import "/src/js/scrollHorz.js"
</script>


<template>
    <div class="section">
        <div class="container">
            <h2 class="title">Projects</h2>
            <h3 class="subtitle">Some project I have made.</h3>
        </div>
    </div>
    <div class="section scrollHorz">
        <div class="projects-container container">
            <Frame v-for="i in 4" :image_url="'https://picsum.photos/740/440?random=' + i" title="Sample" />
        </div>
    </div>
</template>


<style scoped>
.projects-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: left;
    align-items: center;
    gap: 10px;
    position: relative;
    overflow-x: visible;
    gap: 50px;
}
.scrollHorz {
    overflow-x: scroll;
}
</style>