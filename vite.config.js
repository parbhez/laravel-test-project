import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
const ASSET_URL = process.env.ASSET_URL || '';

export default defineConfig({
    base: `${ASSET_URL}/`,
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
});