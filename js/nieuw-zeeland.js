//OpenLayers kaart//
const openLayerMap = new ol.Map({
    target: 'openlayermap',
    layers: [
        new ol.layer.Tile({
            source: new ()
        })
    ],
    view: new ol.View({
        center: ol.proj.
         fromLonLat([-36.8862835, 174.5322907]),
        zoom: 8
    })
});