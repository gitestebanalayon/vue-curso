import { createApp } from 'vue'
import App from './App.vue'
/*-------------------------PASO 4-------------------------*/
import router from './router'

/*-------------------------PASO 5-------------------------*/
const app = createApp(App)
app.use(router)
app.mount('#app')
