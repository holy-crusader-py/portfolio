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
    <div class="section">
        <div class="container project-container">
            <div class="projects-scroller">
                <Frame v-for="i in 4" :image_url="'https://picsum.photos/740/440?random=' + i" title="Sample" />
            </div>
        </div>
    </div>
</template>


<style scoped>
.projects-scroller {
    overflow-x: visible;
    -webkit-overflow-scrolling: touch;
    white-space: nowrap;
    display: flex;
    flex-flow: row nowrap;
    justify-content: left;
    gap: 50px;
    height: 458px;
}

.project-container {
    height: 458px;
}

.section {
    overflow-x: hidden;
}
</style>