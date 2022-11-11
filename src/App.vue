<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/education">Education</router-link>
      <router-link to="/experience">Experience</router-link>
      <router-link to="/projects">Projects</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  padding: 0;
  margin: 0;
}

body {
  background: #080808;
  padding: 0;
  margin: 0;
}
</style>