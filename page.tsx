@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --navy-900: #0a1628;
  --navy-800: #0d1f3c;
  --gold-500: #f59e0b;
  --emerald-500: #10b981;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  font-family: 'Inter', system-ui, sans-serif;
  background: #ffffff;
  color: #1a1a2e;
  overflow-x: hidden;
}

/* Scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #f1f5f9; }
::-webkit-scrollbar-thumb { background: #1a3a6b; border-radius: 3px; }

/* Selection */
::selection { background: #f59e0b; color: #0a1628; }

/* Smooth transitions */
a, button { transition: all 0.3s ease; }

/* Glass effect */
.glass {
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
}

/* Gradient text */
.gradient-text {
  background: linear-gradient(135deg, #f59e0b 0%, #fcd34d 50%, #f59e0b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Card hover */
.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card-hover:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px rgba(10,22,40,0.15);
}

/* Shimmer button */
.btn-shimmer {
  background: linear-gradient(90deg, #f59e0b 0%, #fcd34d 50%, #f59e0b 100%);
  background-size: 200% auto;
  animation: shimmer 2s linear infinite;
}

/* Section fade-in on scroll */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
