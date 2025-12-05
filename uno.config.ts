import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno()],
  theme: {
    fontFamily: {
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
      getCSS: () => `
        html {
          overflow-y: scroll;
        }
      
        table {
          border-collapse: collapse;
          display: block;
          overflow-x: auto;
          white-space: nowrap;
          -webkit-overflow-scrolling: touch;
        }

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