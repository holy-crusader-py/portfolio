<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';


export default {
    components: {
        Header,
        Footer
    },
    methods: {
        toggleMenu(show = null) {
            let t = $(".nav-bar")[0];

            if (show == true || !$(t).hasClass("nav-bar-active") && show != false) {
              $(t).addClass("nav-bar-active");
              $("body").addClass("no-scroll");
            } else {
              $(t).removeClass("nav-bar-active");
              $("body").removeClass("no-scroll");
            }
        }
    }
}

</script>

<template v-cloak>
  <div id="texture"></div>
  <div id="effect"></div>

  <Header></Header>

  <main>
    <div id="page-content">
      <router-view />
    </div>
  </main>

  <Footer></Footer>

</template>

<style scoped>
</style>
