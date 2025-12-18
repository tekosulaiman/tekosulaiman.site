import { defineConfig, presetUno, presetTypography, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography(),
    presetIcons(),
  ],
  theme: {
    colors: {
      primary: "#2563EB",          // biru
      secondary: "#FACC15",        // kuning
      accent: "#7C3AED",           // ungu
      "background-light": "#F8FAFC",
      "background-dark": "#0F172A", // navy gelap
      "surface-light": "#FFFFFF",
      "surface-dark": "#1E293B",
    },
    fontFamily: {
      sans: [
        '"Plus Jakarta Sans"',
        'Inter',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ],
    },
    borderRadius: {
      DEFAULT: "0.5rem",
      xl: "1rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
    },
  },
  content: {
    filesystem: [
      'themes/layouts/**/*.html',
      'themes/partials/**/*.html',
      'content/**/*.md',
    ],
  },
  rules: [
    // Hero background pattern
    [
      'bg-hero-pattern',
      {
        'background-image': `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.7)), url(https://lh3.googleusercontent.com/aida-public/AB6AXuDIaGfm6dMyAsxiqcor-9FgVxe4UofP9_2_rH0iGknsPmjv1oDb5Tb36Ba15id7lcJM0uoUhzecQBlh78UiZj_UJEF68F2h18Q44LfvFLQ9ZvOIXdpN-buXKkodhB5R9sQ2Oh7xC1WgklaAZGNm1y2kgXRhKMcMgIyXCOdW_Wna8yyWyyJdiU_qgnClwJi_fKTfPLoywcKRBAiRsQZ7NfsfxWR2T3ZaFFqQ9QQO6sQQeSVmyIFpL786l-zJ_Slc86BXaRnEuDHmm40)`,
        'background-size': 'cover',
        'background-position': 'center',
      },
    ],
    // Text outline utility
    [
      'text-outline',
      {
        '-webkit-text-stroke': '1px rgba(255, 255, 255, 0.2)',
        color: 'transparent',
      },
    ],
  ],
  preflights: [
    {
      getCSS: () => `
        html { overflow-y: scroll; overflow-x: hidden;}
        table {
          border-collapse: collapse;
          display: block;
          overflow-x: auto;
          white-space: nowrap;
          -webkit-overflow-scrolling: touch;
        }
        table th, table td {
          border: 1px solid #ccc;
          padding: 8px;
          text-align: left;
          vertical-align: top;
        }
        table th {
          background-color: #f2f2f2;
          font-weight: bold;
        }
        table tr:nth-child(even) { background-color: #fafafa; }
        blockquote { border-left: 4px solid #828282; padding-left: 12px; font-style: italic; }
        details { margin-bottom: 1rem; }
        summary { cursor: pointer; font-weight: bold; }
      `,
    },
  ],
})
