// uno.config.ts
import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno()],
  theme: {
    fontFamily: {
      // nama custom class → stack font
      sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    },
  },
  content: {
    filesystem: [
      'themes/layouts/**/*.html',
      'themes/partials/**/*.html',
      'content/**/*.md',
    ],
  },
})