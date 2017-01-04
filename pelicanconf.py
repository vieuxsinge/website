#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHORS = (
    u'Brasserie du Vieux Singe',
)

SITENAME = u'Vieux Singe'
SITEURL = 'http://localhost:8000'

PATH = 'content'

TIMEZONE = 'Europe/Paris'
DEFAULT_DATE_FORMAT = ('%d %B %Y')

DEFAULT_LANG = u'fr'

DEFAULT_PAGINATION = False

THEME = "theme"
INDEX_SAVE_AS = 'nouvelles.html'

MENUITEMS = (
    (u'À propos', '/index.html'),
    (u'Nouvelles', '/archives.html'),
)
DISPLAY_PAGES_ON_MENU = False
DISPLAY_CATEGORIES_ON_MENU = False
STATIC_PATHS = ['documents/brasseries.html', 'images', 'documents', 'extra/CNAME', ]
EXTRA_PATH_METADATA = {'extra/CNAME': {'path': 'CNAME'}}
PLUGIN_PATHS = ["plugins", ]
PLUGINS = ["better_images", ]
ARTICLE_EXCLUDES = ['documents',]
PAGE_EXCLUDES = ['documents',]

RELATIVE_URLS = True
