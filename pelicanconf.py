AUTHOR = 'Teko Sulaiman'
SITENAME = 'tekosulaiman.site'
SITEURL = 'https://tekosulaiman.site'
RELATIVE_URLS = False

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
    'sitemap-index.xml',
    'sitemap-page.xml',
    'sitemap-post.xml',
]
THEME_STATIC_DIR = 'theme'
THEME_STATIC_PATHS = ['static']

PAGE_URL = '{slug}/'
PAGE_SAVE_AS = '{slug}/index.html'

PAGE_PATHS = ['pages']
ARTICLE_PATHS = ['posts']
