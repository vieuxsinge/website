"""
Include JavaScript and CSS files for Pelican
============================================

This plugin allows you to easily embed JS and CSS in the header of individual
articles.
"""
import os
import shutil

from pelican import signals

def add_files(gen, metadata):
    """
    The registered handler for the dynamic resources plugin. It will
    add the javascripts and/or stylesheets to the article
    """
    site_url = gen.settings['SITEURL']
    formatters = {'stylesheets': '<link rel="stylesheet" href="{0}" type="text/css" />',
                  'javascripts': '<script src="{0}"></script>'}
    for key in ['stylesheets', 'javascripts']:
        if key in metadata:
            files = metadata[key].replace(" ", "").split(",")
            htmls = []
            for f in files:
                if f.startswith('http://') or f.startswith('https://'):
                    link = f
                else:
                    if gen.settings['RELATIVE_URLS']:
                        link = "assets/%s" % f
                    else:
                        link = "%s/assets/%s" % (site_url, f)
                html = formatters[key].format(link)
                htmls.append(html)
            metadata[key] = htmls


def register():
    signals.article_generator_context.connect(add_files)
    signals.page_generator_context.connect(add_files)
