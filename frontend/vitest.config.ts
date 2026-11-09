import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            app: path.resolve(__dirname, 'src/app'),
            environments: path.resolve(__dirname, 'src/environments'),
        },
    },
});
