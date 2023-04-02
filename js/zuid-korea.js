//Leaflet kaart//
const leafLet = L.map('leafLet').setView([37.80369867390229, 126.98105880412463], 6);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
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
