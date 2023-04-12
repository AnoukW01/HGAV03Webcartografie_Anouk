//Leaflet kaart//
const leafLet = L.map('leafLet').setView([35.907757, 127.766922], 6);
leafLet.zoomControl.setPosition('bottomleft');

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Copyright: &copy;2012 DeLorme',
  minZoom: 6,
  maxZoom: 10,
}).addTo(leafLet);

L.marker([37.566535, 126.9779692]).addTo(leafLet)
  .bindPopup('SEOUL')
  .openPopup();

let firstAPIrequest = L.geoJSON().addTo(leafLet);
fetch("https://raw.githubusercontent.com/AnoukW01/HGAV03Webcartografie_Anouk/main/data/southkorea.geojson", {})
  .then(response => response.json())
  .then(data => {
    console.log(data);
    firstAPIrequest.addData(data)
  });

L.Control.geocoder().addTo(leafLet)