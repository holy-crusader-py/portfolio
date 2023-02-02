<script>
import Frame from "../components/Frame.vue";


export default {
    components: {
        Frame
    },
    methods: {
        handleScroll(e) {
            let t = $(".projects-scroller")[0];
            var translateX;
            if (t.style.transform) {
                translateX = parseInt(t.style.transform.split("(")[1].split("px")[0]);
            } else {
                translateX = 0;
            }
            let b_translateX = translateX;
            let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

            translateX += delta * 60;
            if (translateX > 10) {
                translateX = 0;
            } else if (translateX < -t.scrollWidth + t.clientWidth) {
                translateX = -t.scrollWidth + t.clientWidth;
            }
            t.style.transform = `translateX(${translateX}px)`;

            if (translateX != b_translateX) {
                e.preventDefault();
            }
        }
    }
}

</script>


<template>
    <div class="section">
        <div class="container">
            <h2 class="title">Projects</h2>
            <h3 class="subtitle">Some project I have made.</h3>
        </div>
    </div>
    <div class="section">
        <div @wheel="handleScroll" class="container project-container">
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

@media screen and (max-width: 850px) {
    .projects-scroller {
        flex-flow: column nowrap;
        height: auto;
        width: 100%;
        justify-content: initial;
        align-items: center;
    }
    .project-container {
        height: auto;
        width: 100%;
    }
}

@media (pointer:coarse) {
    .projects-scroller {
        flex-flow: column nowrap;
        height: auto;
        width: 100%;
        justify-content: initial;
        align-items: center;
    }
    .project-container {
        height: auto;
        width: 100%;
    }
}
</style>