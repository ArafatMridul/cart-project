/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                "red-hat": ["Red Hat Text", "serif"],
            },
            colors: {
                Red: "hsl(14, 86%, 42%)",
                Green: "hsl(159, 69%, 38%)",
                "rose-50": "hsl(20, 50%, 98%)",
                "rose-100": "hsl(13, 31%, 94%)",
                "rose-300": "hsl(14, 25%, 72%)",
                "rose-400": "hsl(7, 20%, 60%)",
                "rose-500": "hsl(12, 20%, 44%)",
                "rose-900": "hsl(14, 65%, 9%)",
            },
            fontWeight: {
                "fw-light": 400,
                "fw-normal": 600,
                "fw-bold": 700,
            },
        },
    },
    plugins: [],
};
