@tailwind base;
@tailwind components;
@tailwind utilities;

html { scroll-behavior: smooth; }

@layer base {
  :root {
    --font-sans: "DM Sans", system-ui, sans-serif;
    --font-display: "Plus Jakarta Sans", system-ui, sans-serif;
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.animate-float { animation: float 3s ease-in-out infinite; }

@keyframes pulse-ring {
  0% { transform: scale(1); opacity: 0.8; }
  100% { transform: scale(1.5); opacity: 0; }
}
.animate-pulse-ring {
  animation: pulse-ring 1.5s ease-out infinite;
}
