<script setup>
import Welcome from './components/Welcome.vue'
import Feed from './components/Feed.vue'
</script>

<template>
  <div id="header">
    <a href="/" class="logo-link">
      <img
        class="logo"
        alt="Vue logo"
        src="https://vuejs.org/images/logo.png"
      />
    </a>
    <div class="nav-bar">
      <div class="nav-bar-item cursor-pointer">Home</div>
      <div class="nav-bar-item cursor-pointer">About</div>
      <div class="nav-bar-item cursor-pointer">Contact</div>
    </div>
  </div>
  <div id="page-content">
    <Welcome></Welcome>
    <Feed></Feed>
  </div>
</template>

<style scoped>
.logo-link {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.logo {
  height: 6em;
  padding: 1.5em;
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
  transition: background-color 300ms;
  display: flex;
  align-items: center;
}

.nav-bar-item:hover {
  background-color: var(--color-tertiary);
}

</style>
