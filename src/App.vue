<template>
  <div id="app">
    <b-nav tabs>
      <b-nav-item><router-link to="/kelas">Data Kelas</router-link></b-nav-item>
      <b-nav-item><router-link to="/siswa">Data Siswa</router-link></b-nav-item>
    </b-nav>
    <router-view></router-view>
  </div>
</template>

<script>

  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import BNavItem from "bootstrap-vue/src/components/nav/nav-item";

export default {
  name: 'app',
  components: {BNavItem},
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 0px;
  }
</style>
