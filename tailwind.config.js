/* eslint-disable import/no-extraneous-dependencies */

module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: { extend: { fontFamily: { rubik: ['Rubik', 'sans-serif'] } } },
    variants: { extend: {} },
    plugins: [require('@tailwindcss/forms')({ strategy: 'class' })],
};
