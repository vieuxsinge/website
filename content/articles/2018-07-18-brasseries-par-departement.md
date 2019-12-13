Title: Carte du nombre de brasseries en France
Slug: brasseries-par-departement
Date: 2018-07-18
Accroche: Par département, ramené au nombre d'habitants
image: /images/dataviz/departements.png
javascripts: https://unpkg.com/leaflet@1.3.1/dist/leaflet.js, https://cdn.jsdelivr.net/npm/leaflet-easybutton@2/src/easy-button.js, https://api.mapbox.com/mapbox.js/plugins/leaflet-fullscreen/v1.0.1/Leaflet.fullscreen.min.js, /dataviz/departement/breweries_per_department.js, /dataviz/departement/main.js
stylesheets: https://api.mapbox.com/mapbox.js/plugins/leaflet-fullscreen/v1.0.1/leaflet.fullscreen.css, https://unpkg.com/leaflet@1.3.1/dist/leaflet.css, http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css, https://cdn.jsdelivr.net/npm/leaflet-easybutton@2/src/easy-button.css, /dataviz/departement/main.css

Le nombre de brasseries en France est en nette évolution depuis quelques années. J'ai donc voulu comparer cette évolution à celle qui a eu lieu aux États-Unis, en me basant sur les données recueillies par [Emmanuel Gillard du projet amertume](http://projet.amertume.free.fr/).

Voici une carte du nombre de brasseries par millions d'habitants / département, à mettre en perspective avec les données des États-Unis, présentés plus bas.

<div id="map"></div>

# Perspective

A titre de comparaison, voici la même carte pour les États-Unis, réalisée par [Beer & Brewing magazine](https://beerandbrewing.com/):

![](/assets/dataviz/departement/comparaison-us-1.png)
![](/assets/dataviz/departement/comparaison-us-2.png)

*Si vous êtes interessés, vous pouvez aller jeter un coup d'oeil [au code source de la page](https://github.com/vieuxsinge/brasseries), le tout est publié sous licence libre.*
