const config = {
  mode: "jit",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  plugins: [require("@tailwindcss/typography")],
};

module.exports = config;
