import { Form } from '@primevue/forms';
import { definePreset, palette } from '@primevue/themes';
import Material from '@primevue/themes/material';
import 'primeicons/primeicons.css';
import Button from 'primevue/button';
import PrimeVue from 'primevue/config';
import Drawer from 'primevue/drawer';
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';
import App from './App.vue';

export const setupPrimeVue = (app: App) => {
    const Noir = definePreset(Material, {
        semantic: {
            primary: palette('{zinc}'),
            colorScheme: {
                dark: {
                    surface: palette('{zinc}'),
                },
            },
        },
    });

    app.use(PrimeVue, {
        theme: {
            preset: Noir,
        },
    });

    app.component('Button', Button);
    app.component('InputText', InputText);
    app.component('Message', Message);
    app.component('Form', Form);
    app.component('Drawer', Drawer);
};
