// DONE REVIEWING: GITHUB COMMIT - 01

/* eslint import/no-extraneous-dependencies: "off" */

import tailwindCSSForms from "@tailwindcss/forms"
import typographyPlugin from "@tailwindcss/typography"
import {type Config} from "tailwindcss"
import tailwindCSSAnimate from "tailwindcss-animate"
import colors from "tailwindcss/colors"
import {parseColor} from "tailwindcss/lib/util/color"
import plugin from "tailwindcss/plugin"
import typographyStyles from "./styles/typography"

export const toRGB = function toRGB(value: string): string {
  return parseColor(value).color.join(" ")
}

export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./examples/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./lib/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "40rem",
        md: "48rem",
        lg: "64rem",
        xl: "80rem"
      }
    },
    extend: {
      colors: {
        "background": "rgb(var(--background) / <alpha-value>)",
        "foreground": "rgb(var(--foreground) / <alpha-value>)",
        "border": "rgb(var(--border) / <alpha-value>)",
        "border-light": "rgb(var(--border-light) / <alpha-value>)",
        "ring": "rgb(var(--ring) / <alpha-value>)",
        "input": "rgb(var(--input) / <alpha-value>)",
        "primary": {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          light: "rgb(var(--primary-light) / <alpha-value>)",
          dark: "rgb(var(--primary-dark) / <alpha-value>)",
          foreground: "rgb(var(--primary-foreground) / <alpha-value>)"
        },
        "secondary": {
          DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
          light: "rgb(var(--secondary-light) / <alpha-value>)",
          dark: "rgb(var(--secondary-dark) / <alpha-value>)",
          foreground: "rgb(var(--secondary-foreground) / <alpha-value>)"
        },
        "accent": {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          light: "rgb(var(--accent-light) / <alpha-value>)",
          dark: "rgb(var(--accent-dark) / <alpha-value>)",
          foreground: "rgb(var(--accent-foreground) / <alpha-value>)"
        },
        "muted": {
          DEFAULT: "rgb(var(--muted) / <alpha-value>)",
          foreground: "rgb(var(--muted-foreground) / <alpha-value>)"
        }
      },
      keyframes: {
        "accordion-down": {
          from: {height: "0"},
          to: {height: "var(--radix-accordion-content-height)"}
        },
        "accordion-up": {
          from: {height: "var(--radix-accordion-content-height)"},
          to: {height: "0"}
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-in-out",
        "accordion-up": "accordion-up 0.2s ease-in-out"
      }
    },
    screens: {
      "sm": "40rem",
      "md": "48rem",
      "lg": "64rem",
      "xl": "80rem",
      "xl-2": "88rem"
    },
    maxWidth: {
      "0": "0rem",
      "px": "0.0625rem",
      "0.5": "0.125rem",
      "1": "0.25rem",
      "1.5": "0.375rem",
      "2": "0.5rem",
      "2.5": "0.625rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "none": "none",
      "xs": "20rem",
      "sm": "24rem",
      "md": "28rem",
      "lg": "32rem",
      "xl": "36rem",
      "xl-2": "42rem",
      "xl-3": "48rem",
      "xl-4": "56rem",
      "xl-5": "64rem",
      "xl-6": "72rem",
      "xl-7": "80rem",
      "xl-8": "87.5rem",
      "full": "100%",
      "min": "min-content",
      "max": "max-content",
      "fit": "fit-content",
      "prose": "65ch",
      "screen-sm": "40rem",
      "screen-md": "48rem",
      "screen-lg": "64rem",
      "screen-xl": "80rem",
      "screen-xl-2": "88rem"
    },
    fontSize: {
      "xs": ["0.75rem", "1rem"],
      "sm": ["0.875rem", "1.5rem"],
      "base": ["1rem", "1.5rem"],
      "lg": ["1.125rem", "1.75rem"],
      "xl": ["1.25rem", "1.75rem"],
      "xl-2": ["1.5rem", "2rem"],
      "xl-3": ["1.875rem", "2.25rem"],
      "xl-4": ["2.25rem", "2.5rem"],
      "xl-5": ["3rem", "1"],
      "xl-6": ["3.75rem", "1"],
      "xl-7": ["4.5rem", "1"],
      "xl-8": ["6rem", "1"],
      "xl-9": ["8rem", "1"]
    },
    fontWeight: {
      "thin": "100",
      "extra-light": "200",
      "light": "300",
      "normal": "400",
      "medium": "500",
      "semi-bold": "600",
      "bold": "700",
      "extra-bold": "800",
      "black": "900"
    },
    borderRadius: {
      "none": "0rem",
      "sm": "0.125rem",
      "DEFAULT": "0.25rem",
      "md": "0.375rem",
      "lg": "0.5rem",
      "xl": "0.75rem",
      "xl-2": "1rem",
      "xl-3": "1.5rem",
      "full": "625rem"
    },
    columns: {
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
      "8": "8",
      "9": "9",
      "10": "10",
      "11": "11",
      "12": "12",
      "auto": "auto",
      "xs-3": "16rem",
      "xs-2": "18rem",
      "xs": "20rem",
      "sm": "24rem",
      "md": "28rem",
      "lg": "32rem",
      "xl": "36rem",
      "xl-2": "42rem",
      "xl-3": "48rem",
      "xl-4": "56rem",
      "xl-5": "64rem",
      "xl-6": "72rem",
      "xl-7": "80rem"
    },
    boxShadow: {
      "sm": "0 0.0625rem 0.125rem 0 rgb(0 0 0 / 0.05)",
      "DEFAULT":
        "0 0.0625rem 0.1875rem 0 rgb(0 0 0 / 0.1), 0 0.0625rem 0.125rem -0.0625rem rgb(0 0 0 / 0.1)",
      "md": "0 0.25rem 0.375rem -0.0625rem rgb(0 0 0 / 0.1), 0 0.125rem 0.25rem -0.125rem rgb(0 0 0 / 0.1)",
      "lg": "0 0.625rem 0.875rem -0.1875rem rgb(0 0 0 / 0.1), 0 0.25rem 0.375rem -0.25rem rgb(0 0 0 / 0.1)",
      "xl": "0 1.25rem 1.5rem -0.25rem rgb(0 0 0 / 0.1), 0 0.5rem 0.625rem -0.375rem rgb(0 0 0 / 0.1)",
      "xl-2": "0 1.5rem 3.125rem -0.75rem rgb(0 0 0 / 0.25)",
      "inner": "inset 0 0.125rem 0.25rem 0 rgb(0 0 0 / 0.05)",
      "none": "0 0 black"
    },
    dropShadow: {
      "sm": "0 0.0625rem 0.0625rem rgb(0 0 0 / 0.05)",
      "DEFAULT": [
        "0 0.0625rem 0.125rem rgb(0 0 0 / 0.1)",
        "0 0.0625rem 0.0625rem rgb(0 0 0 / 0.06)"
      ],
      "md": ["0 0.25rem 0.1875rem rgb(0 0 0 / 0.08)", "0 0.125rem 0.125rem rgb(0 0 0 / 0.06)"],
      "lg": ["0 0.625rem 0.5rem rgb(0 0 0 / 0.04)", "0 0.25rem 0.1875rem rgb(0 0 0 / 0.1)"],
      "xl": ["0 1.25rem 0.75rem rgb(0 0 0 / 0.04)", "0 0.5rem 0.25rem rgb(0 0 0 / 0.08)"],
      "xl-2": "0 1.5rem 1.5rem rgb(0 0 0 / 0.15)",
      "none": "0 0 black"
    },
    blur: {
      "none": "0rem",
      "sm": "0.25rem",
      "DEFAULT": "0.5rem",
      "md": "0.75rem",
      "lg": "1rem",
      "xl": "1.5rem",
      "xl-2": "2.5rem",
      "xl-3": "3.75rem"
    },
    backdropBlur: {
      "none": "0rem",
      "sm": "0.25rem",
      "DEFAULT": "0.5rem",
      "md": "0.75rem",
      "lg": "1rem",
      "xl": "1.5rem",
      "xl-2": "2.5rem",
      "xl-3": "3.75rem"
    },
    typography: typographyStyles
  },
  plugins: [
    typographyPlugin,
    tailwindCSSAnimate,
    tailwindCSSForms,
    plugin(({addBase}) => {
      addBase({
        ":root": {
          "--background": toRGB(colors.white),
          "--foreground": toRGB(colors.zinc["950"]),

          "--border-light": toRGB(colors.zinc["100"]),
          "--border": toRGB(colors.zinc["200"]),
          "--ring": toRGB(colors.zinc["400"]),
          "--input": toRGB(colors.zinc["200"]),

          "--primary": toRGB(colors.green["500"]),
          "--primary-light": toRGB(colors.green["400"]),
          "--primary-dark": toRGB(colors.green["600"]),
          "--primary-foreground": toRGB(colors.green["50"]),

          "--secondary": toRGB(colors.blue["500"]),
          "--secondary-light": toRGB(colors.blue["400"]),
          "--secondary-dark": toRGB(colors.blue["600"]),
          "--secondary-foreground": toRGB(colors.blue["50"]),

          "--accent": toRGB(colors.zinc["900"]),
          "--accent-light": toRGB(colors.zinc["800"]),
          "--accent-dark": toRGB(colors.zinc["950"]),
          "--accent-foreground": toRGB(colors.zinc["100"]),

          "--muted": toRGB(colors.zinc["100"]),
          "--muted-foreground": toRGB(colors.zinc["500"])
        },
        ".dark": {
          "--background": toRGB(colors.zinc["950"]),
          "--foreground": toRGB(colors.zinc["50"]),

          "--border-light": toRGB(colors.zinc["900"]),
          "--border": toRGB(colors.zinc["800"]),
          "--ring": toRGB(colors.zinc["300"]),
          "--input": toRGB(colors.zinc["800"]),

          "--primary": toRGB(colors.green["400"]),
          "--primary-light": toRGB(colors.green["300"]),
          "--primary-dark": toRGB(colors.green["500"]),
          "--primary-foreground": toRGB(colors.green["950"]),

          "--secondary": toRGB(colors.blue["400"]),
          "--secondary-light": toRGB(colors.blue["300"]),
          "--secondary-dark": toRGB(colors.blue["500"]),
          "--secondary-foreground": toRGB(colors.blue["950"]),

          "--accent": toRGB(colors.zinc["50"]),
          "--accent-light": toRGB(colors.white),
          "--accent-dark": toRGB(colors.zinc["100"]),
          "--accent-foreground": toRGB(colors.zinc["950"]),

          "--muted": toRGB(colors.zinc["800"]),
          "--muted-foreground": toRGB(colors.zinc["400"])
        }
      })
    })
  ]
} satisfies Config
