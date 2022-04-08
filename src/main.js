import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import video from 'video.js'
// import 'video.js/dist/video-js.css'

createApp(App).use(store).use(router).mount('#app')
