/** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
      extend: {
        typography: () => ({
          DEFAULT: {
            css: {
              a: {
                  textUnderlineOffset: "2px",
                "font-style": "bold",
                  "&:hover": {
                      "@media (hover: hover)": {
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
          neutral: {
            css: {
            '--tw-prose-body': 'var(--color-neutral-800)',
            '--tw-prose-headings': 'var(--color-neutral-900)',
            '--tw-prose-lead': 'var(--color-neutral-700)',
            '--tw-prose-links': 'var(--color-neutral-900)',
            '--tw-prose-bold': 'var(--color-neutral-900)',
            '--tw-prose-counters': 'var(--color-neutral-600)',
            '--tw-prose-bullets': 'var(--color-neutral-400)',
            '--tw-prose-hr': 'var(--color-neutral-300)',
            '--tw-prose-quotes': 'var(--color-neutral-900)',
            '--tw-prose-quote-borders': 'var(--color-neutral-300)',
            '--tw-prose-captions': 'var(--color-neutral-700)',
            '--tw-prose-code': 'var(--color-neutral-900)',
            '--tw-prose-pre-code': 'var(--color-neutral-100)',
            '--tw-prose-pre-bg': 'var(--color-neutral-900)',
            '--tw-prose-th-borders': 'var(--color-neutral-300)',
            '--tw-prose-td-borders': 'var(--color-neutral-200)',
            '--tw-prose-invert-body': 'var(--color-neutral-200)',
            '--tw-prose-invert-headings': 'var(--color-white)',
            '--tw-prose-invert-lead': 'var(--color-neutral-300)',
            '--tw-prose-invert-links': 'var(--color-white)',
            '--tw-prose-invert-bold': 'var(--color-white)',
            '--tw-prose-invert-counters': 'var(--color-neutral-400)',
            '--tw-prose-invert-bullets': 'var(--color-neutral-600)',
            '--tw-prose-invert-hr': 'var(--color-neutral-700)',
            '--tw-prose-invert-quotes': 'var(--color-neutral-100)',
            '--tw-prose-invert-quote-borders': 'var(--color-neutral-700)',
            '--tw-prose-invert-captions': 'var(--color-neutral-400)',
            '--tw-prose-invert-code': 'var(--color-white)',
            '--tw-prose-invert-pre-code': 'var(--color-neutral-300)',
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': 'var(--color-neutral-600)',
            '--tw-prose-invert-td-borders': 'var(--color-neutral-700)',
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
