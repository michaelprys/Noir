import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import { setupPrimeVue } from './primevue';
import router from './router';

const app = createApp(App);

setupPrimeVue(app);

app.use(router);

app.mount('#app');
