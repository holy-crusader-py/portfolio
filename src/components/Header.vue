<script>

export default {
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

<template>
    <div id="header">
        <router-link @click="toggleMenu(show=false)" class="logo-link" to="/">
            <img
            class="logo"
            alt="Vue logo"
            src="https://vuejs.org/images/logo.png"
            />
        </router-link>
        <div @click="toggleMenu" class="burger-button cursor-pointer">
            <div class="burger-line"></div>
            <div class="burger-line"></div>
            <div class="burger-line"></div>
        </div>
        <div class="nav-bar">
            <router-link @click="toggleMenu(show=false)" to="/projects">
            <div class="nav-bar-item cursor-pointer">Projects</div>
            </router-link>
            <router-link @click="toggleMenu(show=false)" to="/about">
            <div class="nav-bar-item cursor-pointer">About</div>
            </router-link>
            <router-link @click="toggleMenu(show=false)" to="/contact">
            <div class="nav-bar-item cursor-pointer">Contact</div>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.logo-link {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%; width: 75px;
}
.logo {
  width: 48px; height: 48px;
  will-change: filter;
  transition: filter 300ms;
}

#header {
  display: flex;
  flex-flow: row;
  align-items: center;
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.nav-bar-item {
  font-size: 1.85rem;
  font-weight: 600;
  padding: 0 20px;
  height: 100%;
  will-change: background-color;
  transition: background-color 100ms;
  display: flex;
  align-items: center;
}

a {
  height: 100%;
}

.burger-button {
  display: none;
}

.nav-bar-item:hover {
  background-color: var(--color-primary);
  color: #fff;
}

@media screen and (max-width: 560px) {
    #header {
    flex-flow: column;
    align-items: start;
  }
  .nav-bar {
    display: none;
    position: absolute;
    top: 70px;
    flex-flow: column nowrap;
    justify-content: center;
    width: 100%; height: calc(100vh - 70px);
    background-color: var(--secondary-color);
    z-index: 1;
    border-top: 5px solid var(--color-primary);
  }
  .nav-bar-active {
    display: flex !important;
    position: fixed !important;
  }
  a {
    display: flex;
    align-items: center;
    height: 70px; width: 100%;
  }
  .nav-bar-item {
    width: 100%;
    justify-content: center;
  }
  .logo-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75px;
  }
  .burger-button {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    gap: 0px;
    align-items: center;
    position: absolute;
    top: 0; right: 0;
    width: 75px; height: 70px;
    transition: border-width 300ms;
  }
  .burger-line {
    width: 48px;
    height: 5px;
    background-color: var(--color-primary);
    margin: 5px 0;
  }
}
</style>
