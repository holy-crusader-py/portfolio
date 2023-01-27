<template>
  <div class="section hero-section">
    <div class="container">
      <div class="grid-hero">
        <div class="left">
          <h1 class="title">Hey there. <br />I'm Cods.</h1>
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
  display: flex;
  width: 100%;
  justify-content: space-between;
    flex-flow: row wrap;
}

@media screen and (max-width: 1000px) {
  .left {
    margin: auto auto;
  }
  .grid-hero {
    flex-flow: column wrap;
    justify-content: center;
  }
}

.subtitle {
  font-size: 2rem;
  font-weight: 300;
  margin-top: 1rem;
}
</style>
