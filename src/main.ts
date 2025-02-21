import './assets/style.scss'
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.scss';

import vIntersect from "./directives/intersect";
// sweetalert2
import 'sweetalert2/src/sweetalert2.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.directive("intersect", vIntersect);
app.use(createPinia())
app.use(router)
app.mount('#app')

