<template>
  <div id="texture"></div>
  <div id="header">
    <router-link class="logo-link" to="/">
      <img
        class="logo"
        alt="Vue logo"
        src="https://vuejs.org/images/logo.png"
      />
    </router-link>
    <div class="nav-bar">
      <router-link to="/projects">
        <div class="nav-bar-item cursor-pointer">Projects</div>
      </router-link>
      <router-link to="/about">
        <div class="nav-bar-item cursor-pointer">About</div>
      </router-link>
      <router-link to="/contact">
        <div class="nav-bar-item cursor-pointer">Contact</div>
      </router-link>
    </div>
  </div>
  <main>
    <div id="page-content">
      <router-view />
    </div>
  </main>
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
  transition: background-color 100ms;
  display: flex;
  align-items: center;
}

a {
  height: 100%;
}

.nav-bar-item:hover {
  background-color: var(--color-primary);
  color: #fff;
}

</style>
