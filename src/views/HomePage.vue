<template>
  <div class="home">
    <div class="edu-page">
    <div class="card" style="width: 50vw">
      <div class="card-body">
        <h5 class="card-title">Garreck Vassar</h5>
        <h6 class="card-subtitle mb-2 text-muted">Great things do not come to those who want or wish for them, but to those who WORK for them.</h6>
        <p class="card-text">
        <ul>
          <li>I am a motivated and goal based individual that has years of front facing customer experience and a background in technology. I have transitioned from customer facing management into the Tech field as a Full stack Web and App developer. Currently I am working as a Software Integration Engineer.</li>
          <a href="https://github.com/TheGareBear" target="_blank">Github Icon</a>
          <br/>
          <a href="https://www.linkedin.com/in/garreckvassar/" target="_blank">LinkedIn Icon</a>
        </ul>
        </p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
  }
}
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
}

.card {
  margin: 15px;
}

h1 {
  color: black;
}

h3 {
  color: #e2e2e2
}

h5 {
  color: #e2e2e2
}

li {
  color: #e2e2e2
}
</style>
