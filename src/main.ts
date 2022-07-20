import { createApp } from 'vue';
import App from './App.vue';
import Components from './components/index'
import 'element-plus/theme-chalk/dark/css-vars.css'
import GlobalProperties from './global-properties'
import Router from './router'
import 'uno.css';
import { createPinia } from "pinia"

import "./style/index.scss";
const app = createApp(App);

app.use(Router)
app.use(createPinia())
app.use(Components)
app.use(GlobalProperties)
app.mount('#root')

//dark mode
// let systemMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
// document.documentElement.setAttribute('data-mode', systemMode);
