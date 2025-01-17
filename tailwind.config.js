import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    darkMode: ['class', '[data-mode="dark"]'],
    theme: {
    	container: {
    		center: true
    	},
    	fontFamily: {
    		base: [
    			'Inter',
    			'sans-serif'
    		]
    	},
    	extend: {
    		colors: {
    			primary: '#3073F1',
    			secondary: '#68625D',
    			success: '#1CB454',
    			warning: '#E2A907',
    			info: '#0895D8',
    			danger: '#E63535',
    			light: '#eef2f7',
    			dark: '#313a46'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },

    plugins: [forms, require("tailwindcss-animate")],
    // plugins: [
    //     require('@frostui/tailwindcss/plugin'),
    //     require('@tailwindcss/forms'),
    //     require('@tailwindcss/typography'),
    //     require('@tailwindcss/aspect-ratio'),

    // ],
};
