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
]
TEMPLATE_PAGES = {
    'sitemap-post.xml': 'sitemap-post.xml',
    'sitemap-page.xml': 'sitemap-page.xml',
    'sitemap-index.xml': 'sitemap-index.xml',
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


