// Inicializar el mapa centrado en La Habana
var map = L.map('map').setView([23.1136, -82.3666], 13); // Coordenadas de La Habana

// Añadir la capa de mapa base usando OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Añadir un marcador en una posición específica en La Habana
var marker = L.marker([23.135305, -82.358963]).addTo(map);

// Añadir un popup con información adicional
marker.bindPopup("<b>La Habana Vieja</b><br>Centro histórico de la ciudad").openPopup();