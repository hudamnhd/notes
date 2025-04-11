/** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
      extend: {
        typography: () => ({
          DEFAULT: {
            css: {
              "h1 a": {
                "text-decoration": "none",
              },
              "h2 a": {
                "text-decoration": "none",
              },
              blockquote: {
                "font-style": "normal",
              },
              p: {
                "font-size": "17px",
              },
              code: {
                border: "1px solid var(--border)",
                borderRadius: "2px",
                backgroundColor: "var(--accent)",
              },
            },
          },
          neutral: {
            css: {
            "--tw-prose-headings": "var(--color-neutral-700)",
            "h1": {
              fontWeight: "600",
            },
            "--tw-prose-invert-headings": "var(--color-neutral-300)",
            '--tw-prose-links': "var(--color-neutral-800)",
            '--tw-prose-bold': "var(--color-neutral-800)",
            '--tw-prose-invert-links': "var(--color-neutral-200)",
            '--tw-prose-invert-bold': "var(--color-neutral-200)",
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
