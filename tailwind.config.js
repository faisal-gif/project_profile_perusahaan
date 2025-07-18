import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                light: {
                    "primary": "#00C2A8",       // Aqua Green
                    "secondary": "#FF6B6B",     // Watermelon Red
                    "accent": "#FFB84C",        // Sunset Orange
                    "neutral": "#1F2937",       // Slate for text
                    "base-100": "#FFFDF7",      // Beach Sand
                    "base-200": "#FDF6EC",      // Light Beige
                    "base-300": "#F5E9D8",      // Light Tan
                    "info": "#38BDF8",          // Ocean Blue
                    "success": "#34D399",       // Palm Green
                    "warning": "#FACC15",       // Pineapple Yellow
                    "error": "#F43F5E",         // Hibiscus Pink
                },

            },
        ], // Pilih tema yang ingin digunakan

    },
};
