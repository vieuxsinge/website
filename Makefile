PELICANOPTS=

BASEDIR=$(CURDIR)
INPUTDIR=$(BASEDIR)/content
OUTPUTDIR=$(BASEDIR)/output
CONFFILE=$(BASEDIR)/pelicanconf.py
PUBLISHCONF=$(BASEDIR)/publishconf.py

VENV := $(shell echo $${VIRTUAL_ENV-$(shell pwd)/.venv})
VIRTUALENV = virtualenv -p /home/dan/.pyenv/versions/3.7.1/bin/python
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
ifdef PORT
	cd $(OUTPUTDIR) && $(PYTHON) -m pelican.server $(PORT)
else
	cd $(OUTPUTDIR) && $(PYTHON) -m pelican.server 8000
endif

regenerate:
	$(PELICAN) -l -r $(INPUTDIR) -o $(OUTPUTDIR) -s $(CONFFILE) $(PELICANOPTS)

publish: install
	curl -X POST -F data=@content/assets/dataviz/points-de-vente/places.csv https://api-adresse.data.gouv.fr/search/csv/ -F columns=Adresse -o content/assets/dataviz/points-de-vente/geocoded.csv
	$(PELICAN) $(INPUTDIR) -o $(OUTPUTDIR) -s $(PUBLISHCONF) $(PELICANOPTS)
	echo "www.vieuxsinge.com" > $(OUTPUTDIR)/CNAME

github: publish
	ghp-import -n $(OUTPUTDIR)
	git push -f origin gh-pages

.PHONY: html clean serve devserver publish
