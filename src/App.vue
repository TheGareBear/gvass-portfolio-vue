<template>
  <div id="app" class="p-3 mb-2 bg-dark text-dark">
    <div id="nav">
      <nav class="navbar navbar-expand-lg bg-success">
        <div class="container-fluid">
          <a class="navbar-brand" href="/"><img class="navbar-brand" :src=logo></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/education">Education</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/experience">Experience</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/projects">Projects</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <router-view />
    <div id="footer">
      <nav class="navbar navbar-expand-lg bg-success">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/education">Education</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/experience">Experience</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/projects">Projects</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    logo: require('@/assets/GV-logo.png')
  })
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  height: 100%;
  width: 100vw;
}

.navbar-brand {
  height: 65px;
}

.navbar {
  height: 85px;
  width: 100%;
}

#footer {
  position: static;
  bottom: 0;
  width: 100%;
}
</style>