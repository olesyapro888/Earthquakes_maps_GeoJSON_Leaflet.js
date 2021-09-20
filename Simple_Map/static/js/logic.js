// Add console.log to check to see if our code is working.
console.log("working");
// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([40.7, -94.5], 4);
let map = L.map('mapid').setView([30, 30], 2);

// Create the map object with a center and zoom level. An alternative to using the setView() method is to modify each attribute in the map object using the curly braces notation as follows:
// let map = L.map("mapid", {
//   center: [
//     40.7, -94.5
//   ],
//   zoom: 4
// });

// // We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: API_KEY
// });
// // Then we add our 'graymap' tile layer to the map.
// // call the addTo() function with our map object, map on our graymap object tile layer
// streets.addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Accessing the airport GeoJSON URL
// Having the tileLayer() method before accessing large datasets ensures that the map gets loaded before the data is added to it.

let airportData = "https://raw.githubusercontent.com/itekkie/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
//   L.geoJson(data).addTo(map);
L.geoJson(data, {
    onEachFeature: function(feature, layer) {
     console.log(feature);
     layer.bindPopup("<h3>" + "Airport code"+ ":  " +  feature.properties.faa + "</h3>"+"<h3>" + "------------------------------------------"+  "</h3>"+ "<h3>"+ "Airport name"+ ":  " + feature.properties.name + "</>");
     }
 }).addTo(map);
});

