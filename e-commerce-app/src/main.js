import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
// import VueRouter from 'vue-router'
import AllIosIcon from 'vue-ionicons/dist/ionicons-ios.js'
import './Custom.scss'
import Vuelidate from 'vuelidate'





import * as VueGoogleMaps from 'vue2-google-maps'




import router from './router'
import i18n from './i18n'






Vue.use(Vuelidate)
// Vue.use(VueRouter)
Vue.use(AllIosIcon)
Vue.use(BootstrapVue)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCiOiRU7nUcU_HGfe9zlch2-NBGopPGGNM',
    // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
 
    //// If you want to set the version, you can do so:
    // v: '3.26',
  },
 
  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,
 
  //// If you want to manually install components, e.g.
  
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  
})


Vue.config.productionTip = false

// const router = new VueRouter({
//   routes: [
//     { path: '/', component: Content, meta: { scrollToTop: true } },
//     { path: '/Content2', component: Content2, meta: { scrollToTop: true }},
//     { path: '/Kontakt', component: Contact, meta: { scrollToTop: true }},


//   ],
//   mode: 'history',
//   scrollBehavior () {
//     return { x: 0, y: 0 }
//   }
// })



new Vue({
  router,
  i18n,
  

  // router: router,
  render: h => h(App),
  methods: {
    setLocale(lang) {
      Vue.$i18n.locale = lang;
    }
  }
}).$mount('#app');




window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}




