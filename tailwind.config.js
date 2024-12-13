/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      inter: ["Inter", "sans-serif"], // Đặt tên font là 'inter'
    },
  },
};
export const plugins = [];
