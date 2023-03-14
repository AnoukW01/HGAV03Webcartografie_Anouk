//OpenLayers kaart//
const openLayerMap = new ol.Map({
    target: 'openLayerMap',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([174.5322907, -36.8862835]),
        zoom: 8
    })
});

//ArcGIS kaart//
require(["esri/config", "esri/Map", "esri/views/MapView"], function (esriConfig, Map, MapView) {

	esriConfig.apiKey = "AAPK6d1c65e750a94a5da99311d143af405cC8s5_iv42bD6dQ_GlPgL1SJDBrrJTvQX5_t_9KaoEsAsRMM5TrU0g5tESjukBIrX";

	const arcGisMap = new Map({
		basemap: "arcgis-topographic" 
	});

	const View = new MapView({
		map: arcGisMap,
		center: [174.5322907, -36.8862835], 
		zoom: 8, 
		container: "arcGisMap",
	});
});

//Maplibre kaart//
var mapLibre = new maplibregl.Map({
    container: 'mapLibre',
    style: 'https://demotiles.maplibre.org/style.json', // stylesheet location
    center: [174.5322907, -36.8862835], // starting position [lng, lat]
    zoom: 9 // starting zoom
    });