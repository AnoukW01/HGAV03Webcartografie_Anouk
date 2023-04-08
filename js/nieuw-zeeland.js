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
            }),
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([175.7166638, -38.3999984]),
        zoom: 6
    })
})

var zoomslider = new ol.control.ZoomSlider()
openLayerMap.addControl(zoomslider)

var scale = new ol.control.ScaleLine()
openLayerMap.addControl(scale)

//Leaflet kaart//
const leafLet = L.map('leafLetTracks').setView([-43.3744881, 172.4662705], 5);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Copyright: &copy;2012 DeLorme',
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
require(["esri/config", "esri/WebMap", "esri/views/MapView", "esri/widgets/ScaleBar", "esri/widgets/Legend", "esri/widgets/Legend"], function (esriConfig, WebMap, MapView, ScaleBar, Legend) {

    esriConfig.apiKey = "AAPK6d1c65e750a94a5da99311d143af405cC8s5_iv42bD6dQ_GlPgL1SJDBrrJTvQX5_t_9KaoEsAsRMM5TrU0g5tESjukBIrX";

    const arcGisMap = new WebMap({
        portalItem: {
            id: "86848bf24c754eff94c2d455d309f990"
        }
    });

    const view = new MapView({
        container: "arcGisMap",
        map: arcGisMap,
        zoom: 4,
    });

    // Legenda
    const legend = new Legend({
        view: view
    });

    // Legenda toevoegen ArcGIS kaart
    view.ui.add(legend, "bottom-left");

    view.on("click", function(event){
        // event is the event handle returned after the event fires.
        console.log(event.mapPoint);
      });
});


//Maplibre kaart//
var mapLibre = new maplibregl.Map({
    container: 'mapLibre',
    style: 'https://api.maptiler.com/maps/topo-v2/style.json?key=yGJLWGQTJVAjcW7WkmGz', // stylesheet location
    center: [175.7166638, -38.3999984], // starting position [lng, lat]
    zoom: 5// starting zoom
});

const marker = new maplibregl.Marker({
    color: '#a66034'
})

    .setLngLat([174.763336, -36.848461])
    .setPopup(new maplibregl.Popup().setHTML("<h3>Hi, visit Auckland!</h3>")) // add popup
    .addTo(mapLibre)
