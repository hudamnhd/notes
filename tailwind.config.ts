/** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
      extend: {
        typography: () => ({
          DEFAULT: {
            css: {
              a: {
                "font-style": "semibold",
                  "&:hover": {
                      "@media (hover: hover)": {
                          textUnderlineOffset: "2px",
                          textDecorationThickness: "2px",
                      },
                  },
              },
              "h1 a": {
                "text-decoration": "none",
              },
              "h2 a": {
                "text-decoration": "none",
              },
              blockquote: {
                "font-style": "normal",
              },
              code: {
                border: "1px solid var(--border)",
                borderRadius: "2px",
                backgroundColor: "var(--accent)",
              },
              pre: {
                border: "1px solid var(--border)",
              },
            },
          },
          quoteless: {
            css: {
              "blockquote p:first-of-type::before": { content: "none" },
              "blockquote p:first-of-type::after": { content: "none" },
            },
          },
          sm: {
            css: {
              code: {
                fontSize: "var(--text-sm)",
                fontWeight: "400",
              },
            },
          },
        }),
      },
    },
  };
