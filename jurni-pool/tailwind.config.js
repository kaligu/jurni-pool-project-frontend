/*
 *   H.Chethiya Kaligu Jayanath
 *   Copyright (c) 2024 
 *   All rights reserved.
 */
/** @type {import('tailwindcss').Config} */
// vite.config.js
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});