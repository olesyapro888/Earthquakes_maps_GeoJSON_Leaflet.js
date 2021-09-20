// Add console.log to check to see if our code is working.
// console.log("working");

// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([40.7, -94.5], 4);
// let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);

// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.6213, -122.3790], 5);
// let map = L.map('mapid').setView([34.0522, -118.2437], 14);
//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// L.circle([34.0522, -118.2437], {
//     radius: 300,
//     color: "black",
//     fillColor:'#ffffa1'
//  }).addTo(map);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Coordinates for each point to be used in the polyline.
// let line = [
//   [33.9416, -118.4085],
//   [37.6213, -122.3790],
//   [40.7899, -111.9791],
//   [47.4502, -122.3088]
// ];

// Create a polyline using the line coordinates and make the line red.
// Create a polyline using the line coordinates and make the line black.
// L.polyline(line, {
//   color: "yellow"
// }).addTo(map);

// SKILLDRILL blue dashed line, with a weight of 4 and opacity of 0.5 on the light map

// Get data from cities.js
// let cityData = cities;

  // Loop through the cities array and create one marker for each city.
// cities.forEach(function(city) {
//   console.log(city)
//   L.marker(city.location).addTo(map);
// });

// Loop through the cities array and create one marker for each city. 
// Inside the parentheses of the bindPopup() method, we'll retrieve the name of the city, state, and population
// cityData.forEach(function(city) {
//   console.log(city)
//   L.marker(city.location, {
//     radius: city.population/2000000,
    // color: "orange",
    // fillColor:'#ff9900',
    // weight: 4
  //// })
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
// .addTo(map);
// });


// Create the map object with a center and zoom level. An alternative to using the setView() method is to modify each attribute in the map object using the curly braces notation as follows:
// let map = L.map("mapid", {
//   center: [40.7, -94.5],
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

// Grabbing our GeoJSON data with pointToLayer().
// L.geoJson(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h3>" + feature.properties.name + "</h3>" + "</h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>")
//   }
// });

// Grabbing our GeoJSON data with onEachFeature.
L.geoJson(sanFranAirport, {
   onEachFeature: function(feature, layer) {
    console.log(feature);
    layer.bindPopup("<h3>" + "Airport code"+ ":  " +  feature.properties.faa + "</h3>"+"<h3>" + "-----------------------------"+  "</h3>"+ "<h3>"+ "Airport name"+ ":  " + feature.properties.name + "</>");
    }
}).addTo(map);

// We create the tile layer that will be the background of our map./streets-v11 dark-v10 satellite-streets-v11/
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/outdoors-v11',
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);