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
STATIC_PATHS = ['images', 'documents', 'extra/CNAME', ]
EXTRA_PATH_METADATA = {'extra/CNAME': {'path': 'CNAME'}}

RELATIVE_URLS = True

