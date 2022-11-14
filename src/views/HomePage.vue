<template>
  <div class="home">
    <div class="menu">
      <div class="menu-item menu-center">
        Garreck Vassar
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
.menu-center {
  font-size: 36px;
  color: #000000;
}
</style>
