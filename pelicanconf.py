AUTHOR = 'Teko Sulaiman'
SITENAME = 'tekosulaiman.site'
SITEURL = ''

PATH = 'content'
OUTPUT_PATH = 'output'

TIMEZONE = 'Asia/Jakarta'
DEFAULT_LANG = 'en'

THEME = 'themes/ts'
DIRECT_TEMPLATES = ['index', 'tags', 'categories', 'archives']

STATIC_PATHS = [
    'static',
    'images',
    'robots.txt',
    'favicon.ico',
    'extra/jasa-pembuatan-website',
    'extra/jasa-pembuatan-aplikasi',
]

TEMPLATE_PAGES = {
    'sitemap-post.xml': 'sitemap-post.xml',
    'sitemap-page.xml': 'sitemap-page.xml',
    'sitemap-index.xml': 'sitemap-index.xml',
}

EXTRA_PATH_METADATA = {
    'extra/jasa-pembuatan-website/jual-tembakau/index.html': {
        'path': 'jasa-pembuatan-website/jual-tembakau/index.html'
    },
    'extra/jasa-pembuatan-website/koperasi/index.html': {
        'path': 'jasa-pembuatan-website/koperasi/index.html'
    },
    'extra/jasa-pembuatan-website/laundry/index.html': {
        'path': 'jasa-pembuatan-website/laundry/index.html'
    },
    'extra/jasa-pembuatan-website/service-ac/index.html': {
        'path': 'jasa-pembuatan-website/service-ac/index.html'
    },
    'extra/jasa-pembuatan-website/virtual-assistant/index.html': {
        'path': 'jasa-pembuatan-website/virtual-assistant/index.html'
    },
    'extra/jasa-pembuatan-aplikasi/erp/index.html': {
        'path': 'jasa-pembuatan-aplikasi/erp/index.html'
    },
    'extra/jasa-pembuatan-aplikasi/kasir/index.html': {
        'path': 'jasa-pembuatan-aplikasi/kasir/index.html'
    },
}

THEME_STATIC_DIR = 'theme'
THEME_STATIC_PATHS = ['static']

PAGE_URL = '{slug}/'
PAGE_SAVE_AS = '{slug}/index.html'

PAGE_PATHS = ['pages']
ARTICLE_PATHS = ['posts']

ARTICLE_URL = '{slug}/'
ARTICLE_SAVE_AS = '{slug}/index.html'

PLUGINS = ["neighbors", "yaml_metadata"]


