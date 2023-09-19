import { createApp } from 'vue'
import App from '@/App.vue'


import 'bootstrap/dist/css/bootstrap.css'
import vuetify from '@/plugins/vuetify'

import Particles from "vue3-particles"


const app = createApp(App)

app.use(vuetify)
app.use(Particles)

app.mount('#app')