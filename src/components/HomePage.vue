<template>
  <div class="home">
    <div class="menu">
      <div class="menu-item">
        <div class="menu-text">
          Education
        </div>
      </div>
      <div class="menu-item">
        <div class="menu-text">
          Experience
        </div>
      </div>
      <div class="menu-item menu-center">
        Garreck Vassar
      </div>
      <div class="menu-item">
        <div class="menu-text">
          Projects
        </div>
      </div>
      <div class="menu-item">
        <div class="menu-text">
          <i class="fas fa-linkedin-square-in    "></i>
          <i class="fas fa-github-square    "></i>
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
.menu {
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #707070;
}

.menu {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
  height: 60px;
}

.menu-item {
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu-text {
  font-size: 20px;
  color: #818181;
  cursor: pointer;
  padding: 10px;
  border-bottom: 2px solid #080808;
  width: fit-content;
}

.menu-text:hover {
  border-bottom: 2px solid #c278ff;
}

.menu-center {
  font-size: 36px;
  color: #EAEAEA;
}
</style>
