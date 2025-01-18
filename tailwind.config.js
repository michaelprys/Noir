import tailwindcssPrimeui from 'tailwindcss-primeui';

export default {
    plugins: [tailwindcssPrimeui],
    darkMode: ['class'],
    safelist: ['dark'],
    prefix: '',

    content: [
        './pages/**/*.{ts,tsx,vue}',
        './components/**/*.{ts,tsx,vue}',
        './app/**/*.{ts,tsx,vue}',
        './src/**/*.{ts,tsx,vue}',
    ],

    theme: {
        screens: {
            sm: '33.75rem',
            md: '48rem',
            lg: '64rem',
            xl: '75rem',
            xxl: '93.75rem',
        },
        container: {
            center: true,
            padding: '1.5rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            borderRadius: {
                xl: 'calc(var(--radius) + 4px)',
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            fontSize: {
                h1: 'clamp(1.5rem, 0.8864rem + 1.8182vw, 2.25rem)',
                h2: 'clamp(1.25rem, 0.7386rem + 1.5152vw, 1.875rem)',
                h3: 'clamp(1.125rem, 1.0227rem + 0.303vw, 1.25rem)',
            },
        },
    },
};
