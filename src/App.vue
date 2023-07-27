<script setup>
import { defineAsyncComponent } from 'vue'
const Header = defineAsyncComponent(() => import('./components/HeaderItem.vue'))
</script>

<template>
  <div class="app-layout">
    <el-container>
        <Header />
        <router-view></router-view>
        <el-footer class="footer"><p>Footer</p></el-footer>
    </el-container>
</div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

body {
  margin: 0;
  height: 100vh;
}

.app-layout {
  height: 100%;
  padding-top: 60px;

  section {
      display: flex;
      flex-direction: column;
      min-height: 100%;
  }
}

.main {
  padding: 20px 0 20px 40px !important;
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
  justify-content: flex-start;
  flex-grow: 1;
}

.footer {
  width: 100%;
  max-width: 100%;
  height: 54px;

  display: flex;
  align-content: center;
  justify-content: center;
  flex-shrink: 0;

  text-align: center;
  background-color: rgba(128, 128, 128, 0.373);
}

.loading {
  width: 100px;
  height: 100px;

  margin: 0 auto;
}

.back-icon {
  width: 30px;
  height: 30px;

  margin: 0 auto;
  cursor: pointer;
}
</style>
