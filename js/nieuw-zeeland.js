//OpenLayers kaart//
const openLayerMap = new ol.Map({
    target: 'openLayerMap',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        }),
        new ol.layer.Vector({
            source: new ol.source.Vector({
                url: '../data/data.json',
                format: new ol.format.GeoJSON()
            })
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([174.5322907, -36.8862835]),
        zoom: 8
    })
})

//Leaflet kaart//
const leafLet = L.map('leafLetTracks').setView([-36.8862835, 174.5322907], 6);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Copyright: &copy;2012 DeLorme'
    }).addTo(leafLet);

L.tileLayer.wms('http://localhost:8001/geoserver/ows', {
    'layers': 'aeres_webcartografie:doc_tracks',
    'styles': 'line',
    'srs': 'CRS:84',
    'format': 'image/png',
    'opacity': '0,5',
    'transparent': true,
}).addTo(leafLet)

//ArcGIS kaart// 
require(["esri/config", "esri/WebMap", "esri/views/MapView", "esri/widgets/ScaleBar", "esri/widgets/Legend", "esri/widgets/Legend"], function(esriConfig, WebMap, MapView, ScaleBar, Legend) {

esriConfig.apiKey = "AAPK6d1c65e750a94a5da99311d143af405cC8s5_iv42bD6dQ_GlPgL1SJDBrrJTvQX5_t_9KaoEsAsRMM5TrU0g5tESjukBIrX";
    
const arcGisMap = new WebMap({
    portalItem: {
        id: "86848bf24c754eff94c2d455d309f990"
    }
});

const view = new MapView({
    container: "arcGisMap",
    map: arcGisMap,
    zoom: 8,
});

// Legenda
const legend = new Legend({
    view: view
});

// Legenda toevoegen ArcGIS kaart
view.ui.add(legend, "bottom-left");
}); 

//Maplibre kaart//
var mapLibre = new maplibregl.Map({
    container: 'mapLibre',
    style: 'https://demotiles.maplibre.org/style.json', // stylesheet location
    center: [169.97533871680452, -43.69689631783225], // starting position [lng, lat]
    zoom: 9 // starting zoom
    });