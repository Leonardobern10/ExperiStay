import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@images': path.resolve(__dirname, 'src/assets/images'),
            '@data': path.resolve(__dirname, 'src/data'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@theme': path.resolve(__dirname, 'src/theme'),
            '@types': path.resolve(__dirname, 'src/types'),
            '@services': path.resolve(__dirname, 'src/services'),
        },
    },
});
