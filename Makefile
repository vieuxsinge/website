PELICANOPTS=

BASEDIR=$(CURDIR)
INPUTDIR=$(BASEDIR)/content
OUTPUTDIR=$(BASEDIR)/output
CONFFILE=$(BASEDIR)/pelicanconf.py
PUBLISHCONF=$(BASEDIR)/publishconf.py

VENV := $(shell echo $${VIRTUAL_ENV-$(shell pwd)/.venv})
VIRTUALENV = python -m venv .venv
INSTALL_STAMP = $(VENV)/.install.stamp

PYTHON=$(VENV)/bin/python
PELICAN=$(VENV)/bin/pelican
PIP=$(VENV)/bin/pip

DEBUG ?= 0
ifeq ($(DEBUG), 1)
	PELICANOPTS += -D
endif

install: $(INSTALL_STAMP)
$(INSTALL_STAMP): $(PYTHON) requirements.txt
	$(VENV)/bin/pip install -r requirements.txt
	touch $(INSTALL_STAMP)

virtualenv: $(PYTHON)
$(PYTHON):
	$(VIRTUALENV) $(VENV)

html: install
	$(PELICAN) $(INPUTDIR) -o $(OUTPUTDIR) -s $(CONFFILE) $(PELICANOPTS)

clean:
	[ ! -d $(OUTPUTDIR) ] || rm -rf $(OUTPUTDIR)
	rm -rf $(VENV)

serve: install
	$(PELICAN) -lr $(INPUTDIR) -o $(OUTPUTDIR) -s $(CONFFILE) $(PELICANOPTS)

publish: install
	$(PELICAN) $(INPUTDIR) -o $(OUTPUTDIR) -s $(PUBLISHCONF) $(PELICANOPTS)
	echo "www.vieuxsinge.com" > $(OUTPUTDIR)/CNAME

github: publish
	.venv/bin/ghp-import -n $(OUTPUTDIR)
	git push -f origin gh-pages

.PHONY: html clean serve devserver publish
