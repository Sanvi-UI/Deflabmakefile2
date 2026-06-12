import { defineConfig, type Plugin } from 'vite'
import path from 'path'
import fs from 'fs'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

/**
 * Resolves figma:asset/xxx.png imports to actual PNG files found under src/imports/.
 * Used so the codebase compiles cleanly both inside Figma Make and when building for deployment.
 */
function figmaAssetPlugin(): Plugin {
  const importsDir = path.resolve(__dirname, 'src/imports')

  function findFile(dir: string, name: string): string | null {
    if (!fs.existsSync(dir)) return null
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        const found = findFile(path.join(dir, entry.name), name)
        if (found) return found
      } else if (entry.name === name) {
        return path.join(dir, entry.name)
      }
    }
    return null
  }

  return {
    name: 'figma-asset-resolver',
    enforce: 'pre',
    resolveId(source) {
      if (source.startsWith('figma:asset/')) return '\0' + source
    },
    load(id) {
      if (!id.startsWith('\0figma:asset/')) return
      const filename = id.slice('\0figma:asset/'.length)
      const found = findFile(importsDir, filename)
      if (found) {
        // Re-export as a proper asset so Vite hashes and copies it
        return `import asset from ${JSON.stringify(found)};\nexport default asset;`
      }
      // Graceful fallback for assets that don't exist locally
      return `export default '';`
    },
  }
}

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    figmaAssetPlugin(),
  ],

  // Relative base so assets resolve correctly on any GitHub Pages subdirectory
  base: './',

  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv', '**/*.webp', '**/*.jpg', '**/*.jpeg', '**/*.png'],

  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
