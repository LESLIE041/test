<template>
  <div id="app">
    <!-- 路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}

</script>

<style>
body {
  margin: 0
}

html, body {
  height: 100%;
}

#app {
  height: 100%;
}

</style>
