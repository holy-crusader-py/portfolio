<template>
  <div class="section hero-section">
    <div class="container">
      <div class="grid-hero">
        <div class="left">
          <h1 class="title">Hello. <br />It's Percy.</h1>
          <h3 class="subtitle">I'm a french art student.</h3>
        </div>
        <div class="right">
          <img src="/hero-logo.png" alt="DiMA" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.left {
  margin: auto 0;
}

.right {
  text-align: center;
}

.grid-hero {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 36px;
  grid-template-columns: 1fr 1fr;
}

.title {
  font-size: 7rem;
  line-height: 0.9;
}

.subtitle {
  font-size: 2rem;
  font-weight: 300;
  margin-top: 1rem;
}
</style>
