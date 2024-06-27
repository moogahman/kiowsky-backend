import react from '@vitejs/plugin-react';
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        globals: true,
        include: ['**/*.{test,spec}.{ts,tsx}'],
        exclude: ['./node_modules', './dist'],
        css: false,
        setupFiles: ['./vitest.setup.ts'],
        coverage: {
            exclude: configDefaults.coverage.exclude,
            all: true,
            include: ['./src'],
            provider: 'v8',
            reporter: ['clover'],
        },
    },
});
