import { createApp } from 'vue';
import App from './App.vue';

import "./style/index.scss";
const app = createApp(App);

app.mount('#root')

//dark mode
// let systemMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
// document.documentElement.setAttribute('data-mode', systemMode);