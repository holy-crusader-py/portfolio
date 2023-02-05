<template>
  <div class="section hero-section">
    <div class="container">
      <div class="grid-hero">
        <div class="left">
          <h1 class="title">Hey there. <br />I'm Cods.</h1>
          <h3 class="subtitle">I'm a french art student.</h3>
        </div>
        <div class="right">
          <img class="hero-image" src="/CodsWorth.png" alt="DiMA" />
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

.hero-image {
  width: 400px;
}

.grid-hero {
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-flow: row wrap;
}
.subtitle {
  font-size: 2rem;
  font-weight: 300;
  margin-top: 1rem;
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

@media screen and (max-width: 560px) {
  .title {
    font-size: 4.5rem;
  }
  .subtitle {
    font-size: 1.5rem;
  }
}

</style>
