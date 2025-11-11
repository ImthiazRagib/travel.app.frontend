// tailwind.config.ts - Tailwind 4.1 token-based theme setup
import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'


export default {
    content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
    darkMode: ['class', '[data-theme="dark"]'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui'],
            },
            colors: {
                brand: {
                    50: '#f0f7ff',
                    100: '#d9ecff',
                    300: '#90c2ff',
                    500: '#3b82f6',
                    700: '#1d4ed8',
                    900: '#0a1b3f',
                },
                surface: {
                    light: colors.white,
                    dark: '#0d1117',
                },
                background: {
                    light: '#f9fafb',
                    dark: '#010409',
                },
                text: {
                    light: '#111827',
                    dark: '#e2e8f0',
                },
            },
            transitionProperty: {
                theme: 'background-color, color, border-color, fill, stroke',
            },
        },
    },
    plugins: [],
} satisfies Config