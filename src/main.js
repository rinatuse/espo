// main.js
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Card from 'primevue/card';
import Button from 'primevue/button';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Avatar from 'primevue/avatar';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import InputText from 'primevue/inputtext';

// Используем только импорт primeflex локально
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import App from './App.vue';

const app = createApp(App);

app.use(PrimeVue);
app.use(ToastService);

app.component('Card', Card);
app.component('Button', Button);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);
app.component('Avatar', Avatar);
app.component('Toast', Toast);
app.component('InputText', InputText);

app.mount('#app');