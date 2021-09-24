// Add console.log to check to see if our code is working.
// console.log("working");

// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.5, -122.5], 10);

// L.circle([34.0522, -118.2437], {
//     radius: 300,
//     color: "black",
//     fillColor:'#ffffa1'
//  }).addTo(map);

// Create the map object with a center and zoom level. An alternative to using the setView() method is to modify each attribute in the map object using the curly braces notation as follows:
// let map = L.map("mapid", {
//   center: [40.7, -94.5],
//   zoom: 4
// });

// // We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    // tileSize: 512,
    // zoomOffset: -1,
    accessToken: API_KEY
});

let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/satellite-streets-v11',
  // tileSize: 512,
  // zoomOffset: -1,
  accessToken: API_KEY
});

// Grabbing our GeoJSON data with pointToLayer().
// L.geoJson(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h3>" + feature.properties.name + "</h3>" + "</h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>")
//   }
// });

// // Grabbing our GeoJSON data with onEachFeature.
// L.geoJson(sanFranAirport, {
//    onEachFeature: function(feature, layer) {
//     console.log(feature);
//     layer.bindPopup("<h3>" + "Airport code"+ ":  " +  feature.properties.faa + "</h3>"+"<h3>" + "-----------------------------"+  "</h3>"+ "<h3>"+ "Airport name"+ ":  " + feature.properties.name + "</>");
//     }
// }).addTo(map);

// // We create the tile layer that will be the background of our map.
// let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// // We create the dark view tile layer that will be an option for our map.
// let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// Create a base layer that holds both maps.
let baseMaps = {
    "Streets": streets,
    "Satellite Streets": satelliteStreets
  };

// Create the map object with a center and zoom level.
// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]   
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
// Having the tileLayer() method before accessing large datasets ensures that the map gets loaded before the data is added to it.

// "https://raw.githubusercontent.com/itekkie/Mapping_Earthquakes/main/majorAirports.json" let airportData "https://raw.githubusercontent.com/itekkie/Mapping_Earthquakes/Mapping_GeoJSON_Points/majorAirports.json"s
 
// let torontoData = "https://raw.githubusercontent.com/itekkie/Mapping_Earthquakes/main/torontoRoutes.json";

// // Accessing the Toronto neighborhoods GeoJSON URL.
// let torontoHoods = "https://raw.githubusercontent.com/itekkie/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// This function returns the style data for each of the earthquakes we plot on the map. We pass the magnitude of the earthquake into a function to calculate the radius.
function styleInfo(feature) {
// we passed the argument feature to reference each object's features 
  return {
    opacity: 1,
    fillOpacity: 1,
    fillColor: "#ffae42",
    color: "#000000",
    radius: getRadius(),
    stroke: true,
    weight: 0.5
  };
}

// This function determines the radius of the earthquake marker based on its magnitude. Earthquakes with a magnitude of 0 will be plotted with a radius of 1.
function getRadius(magnitude) {
  if (magnitude === 0) {
    return 1;
  }
  return magnitude * 4;
}

// // Grabbing our GeoJSON data.
// d3.json(torontoHoods).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
// L.geoJson(data).addTo(map);
// L.geoJson(data, {
//     style: myStyle,
//     onEachFeature: function(feature, layer) {
//     //  console.log(feature);
//      layer.bindPopup("<h3>" + "Area code: "+  feature.properties.AREA_S_CD + "</h3><hr><h3>" + "Area name: "+  feature.properties.AREA_NAME + "</h3>");
//      }
//  }).addTo(map);
// });

// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  // Creating a GeoJSON layer with the retrieved data.
  // L.geoJson(data).addTo(map);
  L.geoJson(data, {

    // We turn each feature into a circleMarker on the map.    
  pointToLayer: function(feature, latlng) {
      console.log(data);
      return L.circleMarker(latlng);
      },
      // We set the style for each circleMarker using our styleInfo function.
    style: styleInfo
    }).addTo(map);   
});

// Creating a GeoJSON layer with the retrieved data.
