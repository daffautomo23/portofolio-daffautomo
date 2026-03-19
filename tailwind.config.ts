import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-manrope)', 'sans-serif'],
            },
            colors: {
                background: "var(--bg)",
                surface: "var(--surface)",
                border: "var(--border)",
                muted: "var(--muted)",
                ink: "var(--ink)",
                accent: "var(--accent)",
                "accent-light": "var(--accent-light)",
            },
            animation: {
                "marquee": "marquee 30s linear infinite",
                "float": "float 6s ease-in-out infinite",
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "sweep-out": "sweepOut 1.5s cubic-bezier(0.77, 0, 0.175, 1) forwards",
            },
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-50%)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                sweepOut: {
                    "0%": { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" },
                    "100%": { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }
                }
            },
        },
    },
    plugins: [],
};
export default config;
