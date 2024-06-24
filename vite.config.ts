import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    define: {
        __CWD__: JSON.stringify(process.cwd()),
    },
    plugins: [react()],
    resolve: {
        alias: {
            '@homework-task': '/src',
        },
    },
});
