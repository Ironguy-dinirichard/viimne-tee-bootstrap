<template>
  <div id="app">
<LoadingScreen :isLoading="isLoading" />
    <div v-if="!isLoading">
    <TopNavigationMenu />
    <router-view />
    <Footer />
</div>
  </div>
</template>

<script>
import TopNavigationMenu from "./components/TopNavigationMenu.vue";
import Footer from "./components/Footer.vue";
import LoadingScreen from "./components/LoadingScreen";


export default {
  name: "App",
  components: {
    TopNavigationMenu,
    Footer,
    LoadingScreen,
  },
  
};


</script>

<style lang="scss">
// Import custom SASS variable overrides, or alternatively
// define your variable overrides here instead
@import "Custom.scss";

// Import Bootstrap and BootstrapVue source SCSS files
@import "~bootstrap/scss/bootstrap.scss";
@import "~bootstrap-vue/src/index.scss";

// General style overrides and custom classes

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: left;
  background-image: linear-gradient(rgb(209, 224, 187), rgb(218, 201, 204));
}

footer {
  background: rgb(209, 224, 187);
}
</style>