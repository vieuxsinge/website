
	var map = L.map('map', {fullscreenControl: true}).setView([46.6, 2.1], 6);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Donneés carto <a href="https://github.com/gregoiredavid/france-geojson/">INSEE / IGN</a>, ' +
			'<a href="http://www.etalab.gouv.fr/licence-ouverte-open-licence">License Ouverte</a>, ' +
			'Fonds © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.light'
	}).addTo(map);

	// control that shows state info on hover
	var info = L.control();

	info.onAdd = function (map) {
		this._div = L.DomUtil.create('div', 'info');
		this.update();
		return this._div;
	};

	info.update = function (props) {
		this._div.innerHTML = (props ?
			'<b>' + props.nom + '</b><br />' + props.breweries + ' brasseries / ' + props.population + ' habitants' +
			'<br /> <em>soit ' + props.breweries_per_capita + ' brasserie(s) / million d\'habitants</em>'
			: 'Déplacez vous sur un département');
	};

	info.addTo(map);


	// get color depending on population density value
	function getColor(d) {
		// Depending the map that was asked, the color codes are not the same.
			return d > 70 ? '#400026' :
			d > 60 ? '#800026' :
			d > 50 ? '#BD0026' :
			d > 40 ? '#E31A1C' :
			d > 30 ? '#FC4E2A' :
			d > 20 ? '#FD8D3C' :
			d > 10  ? '#FEB24C' :
			d > 0  ? '#FED976' :
			'#FFEDA0';

	}

	function style(feature) {
		var value = feature.properties.breweries_per_capita;
		return {
			weight: 0,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.5,
			fillColor: getColor(value)
		};
	}

	function highlightFeature(e) {
		var layer = e.target;

		layer.setStyle({
			weight: 2,
			color: '#666',
			dashArray: '',
			fillOpacity: 0.7
		});

		if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
			layer.bringToFront();
		}

		info.update(layer.feature.properties);
	}

	var geojson;

	function resetHighlight(e) {
		geojson.resetStyle(e.target);
		info.update();
	}

	function zoomToFeature(e) {
		map.fitBounds(e.target.getBounds());
	}

	function onEachFeature(feature, layer) {
    layer.bindTooltip(function (layer) {
      return String(layer.feature.properties.breweries_per_capita);
    }, {permanent: true, opacity: 0.5, direction: "center", className: 'labelstyle'}
    );
		layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: zoomToFeature
		});
	}

	geojson = L.geoJson(brasseriesData, {
		style: style,
		onEachFeature: onEachFeature}
  ).addTo(map);

	map.attributionControl.addAttribution('Données sur les brasseries &copy; <a href="http://projet.amertume.free.fr/html/liste_brasseries.htm/">Projet amertume</a>');

	var legend = L.control({position: 'bottomright'});

	legend.onAdd = function (map) {
		var grades;
			grades = [0, 10, 20, 30, 40, 50, 60, 70];

		var div = L.DomUtil.create('div', 'info legend'),
			labels = [],
			from, to;

		for (var i = 0; i < grades.length; i++) {
			from = grades[i];
			to = grades[i + 1];

			labels.push(
				'<i style="background:' + getColor(from + 1) + '"></i> ' +
				from + (to ? '&ndash;' + to : '+'));
		}

		div.innerHTML = labels.join('<br>');
		return div;
	};

	legend.addTo(map);
