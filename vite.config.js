import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],

  build: {
    // Target modern browsers — smaller output, no polyfill bloat
    target: 'es2020',

    // Raise warning threshold; our card images are large by design
    chunkSizeWarningLimit: 800,

    rollupOptions: {
      output: {
        // Split heavy vendor libs into separate chunks.
        // Each chunk is loaded only when the component that needs it is rendered,
        // keeping the initial JS parse budget small for mobile.
        manualChunks(id) {
          // OGL (WebGL) — only used by PatternWaves (Contact section, below fold)
          if (id.includes('node_modules/ogl')) return 'vendor-ogl'

          // Motion (Framer) — used by Hero, About, Expertise. Split from react-dom
          // so the animation runtime does not block the first React render.
          if (id.includes('node_modules/motion')) return 'vendor-motion'

          // Lenis smooth-scroll — initialised after paint, no reason to block parse
          if (id.includes('node_modules/lenis')) return 'vendor-lenis'

          // lucide icons — tree-shaken but still adds parse cost; isolate from app
          if (id.includes('node_modules/lucide-react')) return 'vendor-lucide'

          // React core — keep as its own chunk for long-term caching
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
            return 'vendor-react'
          }
        },
      },
    },
  },
})
