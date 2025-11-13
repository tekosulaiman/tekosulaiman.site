// uno.config.ts
import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno()],
  content: {
    filesystem: [
      'themes/layouts/**/*.html',
      'themes/partials/**/*.html',
      'content/**/*.md',
    ],
  },
})
