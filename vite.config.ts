import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        preserveSymlinks: true,
        alias: {
            '@pages': '/src/pages',
            '@components': '/src/components',
            '@assets': '/src/assets',
            '@services': '/src/services',
            '@routes': '/src/routes',
        },
    },
});
