import { createApp } from 'vue';
import App from './App.vue';
import Components from './components/index'
import GlobalProperties from './global-properties'
import Router from './router'
import 'uno.css';


import "./style/index.scss";
const app = createApp(App);

app.use(Router)
app.use(Components)
app.use(GlobalProperties)
app.mount('#root')

//dark mode
// let systemMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
// document.documentElement.setAttribute('data-mode', systemMode);
