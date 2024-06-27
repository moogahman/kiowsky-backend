import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        environment: 'jsdom',
        globals: true,
        include: ['**/*.{test,spec}.{ts,tsx}'],
        exclude: ['./node_modules', './dist'],
        css: false,
        setupFiles: ['./src/setup.ts'],
        coverage: {
            exclude: configDefaults.coverage.exclude,
            all: true,
            include: ['./src'],
            provider: 'v8',
            reporter: ['clover'],
        },
    },
});
