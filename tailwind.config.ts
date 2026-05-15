import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        carbon: "#050505",
        ink: "#0A0A0A",
        panel: "#111111",
        primary: "hsl(var(--primary))",
        mist: "#D8FFE8",
        muted: "#999999"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "Space Grotesk", "Inter", "sans-serif"],
        satoshi: ["var(--font-satoshi)", "Inter", "sans-serif"]
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 20% 10%, hsl(var(--primary) / .22), transparent 22rem), radial-gradient(circle at 80% 30%, rgba(255,255,255,.12), transparent 18rem)"
      },
      boxShadow: {
        primaryGlow: "0 0 80px hsl(var(--primary) / .18)"
      }
    }
  },
  plugins: []
};

export default config;
