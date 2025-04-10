---
title: "Multi Theme Tailwind Css"
description: "Implement multi themes with Tailwind CSS."
publishDate: "Mar 1 2025"
tags: ["tailwindcss", "css"]
---

## Reference

Source: [Theme switching based on this tweet from Devon Govett](https://twitter.com/devongovett/status/1757131288144663027)

> This method work with Tailwind CSS V3

## Define theme variables
```css title="styles.css"
/*
  Theme variables
*/
@layer base {
	:root {
		--background: 0 0% 100%;
		--foreground: 240 10% 3.9%;
		--muted: 220 14.3% 95.9%;
		--muted-foreground: 220 8.9% 46.1%;
		--popover: 0 0% 100%;
		--popover-foreground: 224 71.4% 4.1%;
		--card: 0 0% 100%;
		--card-foreground: 224 71.4% 4.1%;
		--border: 220 13% 91%;
		--input: 220 13% 91%;
		--primary: 220.9 39.3% 11%;
		--primary-foreground: 210 20% 98%;
		--secondary: 220 14.3% 95.9%;
		--secondary-foreground: 220.9 39.3% 11%;
		--accent: 220 14.3% 95.9%;
		--accent-foreground: 220.9 39.3% 11%;
		--destructive: 0 72.22% 50.59%;
		--destructive-foreground: 210 20% 98%;
		--ring: 224 71.4% 4.1%;
		--chart-1: 20.5 90.2% 48.2%;
		--chart-2: 174.7 83.9% 31.6%;
		--chart-3: 200.4 98% 39.4%;
		--chart-4: 262.1 83.3% 57.8%;
		--chart-5: 333.3 71.4% 50.6%;
		--radius: 0.5rem;

		--background-dark: 222.2 84% 4.9%;
		--foreground-dark: 0 0% 98%;
		--muted-dark: 215 27.9% 16.9%;
		--muted-foreground-dark: 217.9 10.6% 64.9%;
		--popover-dark: 224 71.4% 4.1%;
		--popover-foreground-dark: 210 20% 98%;
		--card-dark: 224 71.4% 4.1%;
		--card-foreground-dark: 210 20% 98%;
		--border-dark: 215 27.9% 16.9%;
		--input-dark: 215 27.9% 16.9%;
		--primary-dark: 210 20% 98%;
		--primary-foreground-dark: 220.9 39.3% 11%;
		--secondary-dark: 215 27.9% 16.9%;
		--secondary-foreground-dark: 210 20% 98%;
		--accent-dark: 215 27.9% 16.9%;
		--accent-foreground-dark: 210 20% 98%;
		--destructive-dark: 0 72.22% 50.59%;
		--destructive-foreground-dark: 210 20% 98%;
		--ring-dark: 216 12.2% 83.9%;
		--chart-1-dark: 24.6 95% 53.1%;
		--chart-2-dark: 173.4 80.4% 40%;
		--chart-3-dark: 198.6 88.7% 48.4%;
		--chart-4-dark: 258.3 89.5% 66.3%;
		--chart-5-dark: 330.4 81.2% 60.4%;

		--background-sephia: 39.4 69.6% 91%;
		--foreground-sephia: 222.2 84.00% 4.90%;
		--card-sephia: 39.4 69.6% 91%;
		--card-foreground-sephia: 222.2 84.00% 4.90%;
		--primary-sephia: 38.8 28.8% 34.7%;
		--primary-foreground-sephia: 210 40% 98%;
		--secondary-sephia: 38.6 67.8% 82.9%;
		--secondary-foreground-sephia: 222.2 47.4% 11.20%;
		--muted-sephia: 38.6 67.8% 82.9%;
		--muted-foreground-sephia: 0, 0%, 40%;
		--accent-sephia: 38.6 67.8% 82.9%;
		--accent-foreground-sephia: 38.2 73.3% 2.9%;
		--popover-sephia: 39.4 69.6% 91%;
		--popover-foreground-sephia: 222.2 84.00% 4.90%;
		--destructive-sephia: 0 84.2% 60.2%;
		--destructive-foreground-sephia: 210 40% 98%;
		--border-sephia: 38, 36%, 78%;
		--input-sephia: 38, 36%, 78%;
		--ring-sephia: 38.2 73.3% 2.9%;
		--chart-1-sephia: 24.6 95% 53.1%;
		--chart-2-sephia: 173.4 80.4% 40%;
		--chart-3-sephia: 198.6 88.7% 48.4%;
		--chart-4-sephia: 258.3 89.5% 66.3%;
		--chart-5-sephia: 330.4 81.2% 60.4%;
	}
}

@layer base {
	:root {
		--theme-light: initial;
		--theme-dark: ;
		--theme-sephia: ;
		color-scheme: light dark sephia;
	}

	@media (prefers-color-scheme: dark) {
		:root {
			--theme-light: ;
			--theme-sephia: ;
			--theme-dark: initial;
		}
	}

	[data-theme="light"] {
		--theme-light: initial;
		--theme-dark: ;
		--theme-sephia: ;
		color-scheme: light;
	}

	[data-theme="dark"] {
		--theme-light: ;
		--theme-sephia: ;
		--theme-dark: initial;
		color-scheme: dark;
	}

	[data-theme="sephia"] {
		--theme-light: ;
		--theme-dark: ;
		--theme-sephia: initial;
		scrollbar-color: hsl(38.9 68.1% 32%) hsl(38.6 67.8% 82.9%);
		color-scheme: sephia;
		scrollbar-width: thin;
		scrollbar-gutter: stable;
	}
}

@layer base {
	* {
		@apply border-border;
	}
	body {
		@apply bg-background text-foreground font-sans;
		font-family: "Inter", sans-serif;
		font-weight: 400;
	}
}

@font-face {
	font-family: "LPMQ IsepMisbah";
	src: url("/fonts/LPMQ-IsepMisbah.ttf") format("truetype");
}
```

## Create file `extended-theme.ts`
```ts title="extended-theme.ts"
import { type Config } from "tailwindcss";


function lightDarkVar(baseName: string) {
  return `var(--theme-light, hsl(var(--${baseName}))) var(--theme-dark, hsl(var(--${baseName}-dark))) var(--theme-sephia, hsl(var(--${baseName}-sephia)))`;
}

export const extendedTheme = {
  colors: {
    border: lightDarkVar("border"),
    input: lightDarkVar("input"),
    ring: lightDarkVar("ring"),
    background: lightDarkVar("background"),
    foreground: lightDarkVar("foreground"),
    primary: {
      DEFAULT: lightDarkVar("primary"),
      foreground: lightDarkVar("primary-foreground"),
    },
    secondary: {
      DEFAULT: lightDarkVar("secondary"),
      foreground: lightDarkVar("secondary-foreground"),
    },
    destructive: {
      DEFAULT: lightDarkVar("destructive"),
      foreground: lightDarkVar("destructive-foreground"),
    },
    muted: {
      DEFAULT: lightDarkVar("muted"),
      foreground: lightDarkVar("muted-foreground"),
    },
    accent: {
      DEFAULT: lightDarkVar("accent"),
      foreground: lightDarkVar("accent-foreground"),
    },
    popover: {
      DEFAULT: lightDarkVar("popover"),
      foreground: lightDarkVar("popover-foreground"),
    },
    card: {
      DEFAULT: lightDarkVar("card"),
      foreground: lightDarkVar("card-foreground"),
    },
    chart: {
      1: lightDarkVar("chart-1"),
      2: lightDarkVar("chart-2"),
      3: lightDarkVar("chart-3"),
      4: lightDarkVar("chart-4"),
      5: lightDarkVar("chart-5"),
    },
  },
  borderColor: {
    DEFAULT: "hsl(var(--border))",
  },
  borderRadius: {
    lg: "var(--radius)",
    md: "calc(var(--radius) - 2px)",
    sm: "calc(var(--radius) - 4px)",
  },
  fontSize: {
    // 1rem = 16px
    /** 80px size / 84px high / bold */
    mega: ["5rem", { lineHeight: "5.25rem", fontWeight: "700" }],
    /** 56px size / 62px high / bold */
    h1: ["3.5rem", { lineHeight: "3.875rem", fontWeight: "700" }],
    /** 40px size / 48px high / bold */
    h2: ["2.5rem", { lineHeight: "3rem", fontWeight: "700" }],
    /** 32px size / 36px high / bold */
    h3: ["2rem", { lineHeight: "2.25rem", fontWeight: "700" }],
    /** 28px size / 36px high / bold */
    h4: ["1.75rem", { lineHeight: "2.25rem", fontWeight: "700" }],
    /** 24px size / 32px high / bold */
    h5: ["1.5rem", { lineHeight: "2rem", fontWeight: "700" }],
    /** 16px size / 20px high / bold */
    h6: ["1rem", { lineHeight: "1.25rem", fontWeight: "700" }],

    /** 32px size / 36px high / normal */
    "body-2xl": ["2rem", { lineHeight: "2.25rem" }],
    /** 28px size / 36px high / normal */
    "body-xl": ["1.75rem", { lineHeight: "2.25rem" }],
    /** 24px size / 32px high / normal */
    "body-lg": ["1.5rem", { lineHeight: "2rem" }],
    /** 20px size / 28px high / normal */
    "body-md": ["1.25rem", { lineHeight: "1.75rem" }],
    /** 16px size / 20px high / normal */
    "body-sm": ["1rem", { lineHeight: "1.25rem" }],
    /** 14px size / 18px high / normal */
    "body-xs": ["0.875rem", { lineHeight: "1.125rem" }],
    /** 12px size / 16px high / normal */
    "body-2xs": ["0.75rem", { lineHeight: "1rem" }],

    /** 18px size / 24px high / semibold */
    caption: ["1.125rem", { lineHeight: "1.5rem", fontWeight: "600" }],
    /** 12px size / 16px high / bold */
    button: ["0.75rem", { lineHeight: "1rem", fontWeight: "700" }],
  },
  fontFamily: {
    sans: [
      '"Inter"',
      "ui-sans-serif",
      "system-ui",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"',
    ],
  },
} satisfies Config["theme"];
```


## Import file extended-theme
```ts title="tailwind.config.ts"
/** @type {import('tailwindcss').Config} */
import { extendedTheme } from "./src/utils/extended-theme";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: extendedTheme,
	},
};

```
