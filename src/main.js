import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import './index.css'
import router from "./router"



createApp(App).use(router).mount('#app')




// new Vue({
//     render: h => h(App),
//     // router
//   }).$mount('#app')

