import { Form } from '@primevue/forms';
import { definePreset, palette } from '@primevue/themes';
import Material from '@primevue/themes/material';
import 'primeicons/primeicons.css';
import Button from 'primevue/button';
import PrimeVue from 'primevue/config';
import Drawer from 'primevue/drawer';
import InputText from 'primevue/inputtext';
import Menu from 'primevue/menu';
import Message from 'primevue/message';
import Ripple from 'primevue/ripple';
import StyleClass from 'primevue/styleclass';
import App from './App.vue';

export const setupPrimeVue = (app: App) => {
    const Noir = definePreset(Material, {
        semantic: {
            primary: palette('{stone}'),
        },
    });

    app.use(PrimeVue, {
        theme: {
            preset: Noir,
            options: {
                prefix: 'p',
                darkModeSelector: '.dark',
                cssLayer: {
                    name: 'primevue',
                    order: 'tailwind-base, primevue, tailwind-utilities',
                },
            },
        },
        pt: {
            Menu: {
                root: 'bg-primary-500 dark:bg-primary-900',
                submenuLabel: 'text-primary-300 ',
                itemContent:
                    'hover:bg-primary-400 bg-primary-500 text-primary-300 dark:bg-primary-900 dark:hover:bg-primary-800',
                itemIcon: 'text-primary-300',
            },
            Button: {
                root: 'text-primary-800 hover:bg-primary-500/40 dark:text-primary-400 dark:hover:bg-primary-800',
            },
            InputText: {
                root: 'bg-primary-300 border-primary-500/80 dark:border-primary-500 dark:hover:border-primary-400 text-primary-700 dark:text-primary-300 hover:border-primary-700 placeholder-primary-500 dark:bg-primary-900',
            },
        },
        ripple: true,
    });

    app.directive('styleclass', StyleClass);
    app.directive('ripple', Ripple);
    app.component('Button', Button);
    app.component('InputText', InputText);
    app.component('Message', Message);
    app.component('Form', Form);
    app.component('Drawer', Drawer);
    app.component('Menu', Menu);
};
