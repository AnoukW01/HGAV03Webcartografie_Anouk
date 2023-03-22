//Leaflet kaart//
const leafLet = L.map('leafLet').setView([52.31303358589141, 4.795468530117184], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(leafLet);


let mijnGeojsonLaag = L.geoJSON().addTo(leafLet)

const mijnEersteAPIRequist = 'https://cartographyvectors.com/map/1516-south-korea-with-regions'

fetch(mijnEersteAPIRequist, {})
    .then(response => response.json())
    .then(data => { 
        console.log(data);
        console.log(data.response.docs[0].geometrie_ll);
         
        // Geojson naar Leaflet laag
        let = geojsonFeature = Terraformer.wktToGeoJSON(data.response.docs[0].geometrie_ll);
        mijnGeojsonLaag.addData(geojsonFeature);
         
        // Center coordinaten voor zoomen naar center
        let centerCoordinates = Terraformer.wktToGeoJSON(data.response.docs[0].centroide_ll);
        console.log(centerCoordinates);
        leafLet.flyTo(centerCoordinates.coordinates.reverse());
        }  
    )
