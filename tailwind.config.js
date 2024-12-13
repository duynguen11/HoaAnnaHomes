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
export const corePlugins = {
  preflight: false, // Nếu cần, bạn có thể tắt preflight để tránh xung đột với các CSS khác
};
