var map = L.map('map').setView([46.6, 2.1], 6);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Fonds © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox.light'
}).addTo(map);

var placesLayer = omnivore.csv('assets/dataviz/points-de-vente/geocoded.csv', {
  latfield: 'latitude',
  lonfield: 'longitude',
  delimiter: ';'})
  .on('ready', function() {
        map.fitBounds(placesLayer.getBounds());
        placesLayer.eachLayer(function(layer) {
            layer.bindPopup("<strong>" + layer.feature.properties.Nom + "</strong>" + "<br />" + layer.feature.properties.Adresse);
        });
    })
    .addTo(map);

// Hide the controls from leaflet. We don't need them here.
var lc = document.getElementsByClassName('leaflet-control-zoom');
lc[0].style.visibility = 'hidden';
