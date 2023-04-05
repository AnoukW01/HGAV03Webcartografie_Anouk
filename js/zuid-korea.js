//Leaflet kaart//
const leafLet = L.map('leafLet').setView([37.80369867390229, 126.98105880412463], 6);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Copyright: &copy;2012 DeLorme'
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
      L.Control.geocoder().addTo(leafLet)  
  });
