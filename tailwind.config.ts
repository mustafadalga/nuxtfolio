import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}"
    ],
    plugins: [
        require('@tailwindcss/typography'),
    ],
    theme: {
        extend: {
            fontFamily: {
                'primary': [ 'Roboto', 'sans-serif' ],
                'secondary': [ 'Open Sans', 'sans-serif' ],
                'sans': [ 'Roboto', 'sans-serif' ],
            }
        }
    },
};


export default config;
