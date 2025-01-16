import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
    plugins: [
        vue(),
        // vueDevTools()
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@ui': fileURLToPath(new URL('./src/components/ui', import.meta.url)),
            '@img': fileURLToPath(new URL('./src/assets/images', import.meta.url)),
            '@icon': fileURLToPath(new URL('./src/components/icons', import.meta.url)),
        },
    },
})
