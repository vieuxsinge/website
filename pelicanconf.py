#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHORS = (
    u'Brasserie du Vieux Singe',
)

SITENAME = u'Brasserie du Vieux Singe'
SITEURL = 'http://localhost:8000'

PATH = 'content'

TIMEZONE = 'Europe/Paris'
DEFAULT_DATE_FORMAT = ('%d %B %Y')

DEFAULT_LANG = u'fr'

DEFAULT_PAGINATION = False

THEME = "theme"

MENUITEMS = (
    (u'Accueil', '/index.html', 'wide'),
    (u'Bières', '/index.html#bieres', 'wide'),
    (u'Manifeste', '/manifeste.html', 'mobile'),
    (u'Actus', '/blog.html', 'mobile'),
    (u'Points de vente', '/ou-nous-trouver.html', 'mobile'),
    (u'Infos pratiques', '/index.html#infospratiques', 'wide'),
)
DISPLAY_PAGES_ON_MENU = False
DISPLAY_CATEGORIES_ON_MENU = False
DIRECT_TEMPLATES = ['index', 'blog']
STATIC_PATHS = ['documents/brasseries.html', 'images', 'assets', 'extra/CNAME', ]
EXTRA_PATH_METADATA = {'extra/CNAME': {'path': 'CNAME'}}
PLUGIN_PATHS = ["plugins", ]
PLUGINS = ["include_assets", "recipes"]
ARTICLE_EXCLUDES = ['documents', "recettes"]
PAGE_EXCLUDES = ['documents', "recettes"]
RELATIVE_URLS = True

RECIPE_SAVE_AS = "{title}.html"
RECIPE_URL = "/totot"
