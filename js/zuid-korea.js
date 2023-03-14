//Leaflet kaart//
const leafLet = L.map('leafLet').setView([37.566535, 126.9779692], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(leafLet);

L.marker([37.566535, 126.9779692]).addTo(leafLet)
.bindPopup('SEOUL')
.openPopup();
