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
  preflights: [
    {
      getCSS: () => `table {
          border-collapse: collapse;
          display: block;              /* ubah jadi block element */
          overflow-x: auto;            /* aktifkan scroll horizontal */
          white-space: nowrap;         /* cegah isi kolom pecah ke bawah */
          -webkit-overflow-scrolling: touch;
        }

        /* Aturan untuk header dan cell */
        table th,
        table td {
          border: 1px solid #ccc;
          padding: 8px;
          text-align: left;
          vertical-align: top;
        }

        table th {
          background-color: #f2f2f2;
          font-weight: bold;
        }

        table tr:nth-child(even) {
          background-color: #fafafa;
        }

        blockquote { border-left: 4px solid #828282; padding-left: 12px; font-style: italic; }
        details { margin-bottom: 1rem; }
        summary { cursor: pointer; font-weight: bold; }`,
    },
  ]
})