const sharedConfig = require("@nobilabs/tailwind-config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [sharedConfig],
  content: ["./src/**/*.{ts,tsx}"],
};
