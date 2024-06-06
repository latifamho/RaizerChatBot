// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: {
                first: "#FF805F",
                second: "#DFE2EB",
                third: "#A7ACBB",
                fourth: "#2C2D32",
                fifth: "#2D313A",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
        },
    },
    variants: {},
    plugins: [require("tailwindcss"), require("autoprefixer")],
};
