// 17-Mapping-Web
// Day I
// 01-Ins_Basic_Map
// solved/logic.js


// Creating our initial map object
// We set the longitude, latitude, and the starting zoom level
// This gets inserted into the div with an id of 'map'
var myMap = L.map("map", {
  center: [37.0902, -95.7129],
  zoom: 5
});


// Adding a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// Create a new marker
// Pass in some initial options, and then add it to the map using the addTo method
var marker = L.marker([33.6407282, -84.4277001], {
  draggable: true,
  title: "My First Marker"
}).addTo(myMap);

// Binding a pop-up to our marker
marker.bindPopup("ATL");

var marker = L.marker([33.943971, 	-118.408324], {
  draggable: true,
  title: "My Second Marker"
}).addTo(myMap);

// Binding a pop-up to our marker
marker.bindPopup("LAX");

var marker = L.marker([	41.978928, 		-87.905985], {
  draggable: true,
  title: "My Third Marker"
}).addTo(myMap);

// Binding a pop-up to our marker
marker.bindPopup("ORD");

var marker = L.marker([		32.8998091, 		-97.0403352], {
  draggable: true,
  title: "My Fourth Marker"
}).addTo(myMap);

// Binding a pop-up to our marker
marker.bindPopup("DFW");

var marker = L.marker([		39.848794, 		-104.672857], {
  draggable: true,
  title: "My Fifth Marker"
}).addTo(myMap);

// Binding a pop-up to our marker
marker.bindPopup("DEN");

var marker = L.marker([			40.641311, 		-73.778139], {
  draggable: true,
  title: "My Sixth Marker"
}).addTo(myMap);

// Binding a pop-up to our marker
marker.bindPopup("JFK");

var marker = L.marker([				37.6213129, 		-122.3789554], {
  draggable: true,
  title: "My Seventh Marker"
}).addTo(myMap);

// Binding a pop-up to our marker
marker.bindPopup("SFO");

var marker = L.marker([					47.4502499, 	-122.3088165], {
  draggable: true,
  title: "My Eighth Marker"
}).addTo(myMap);

// Binding a pop-up to our marker
marker.bindPopup("SEA");

var marker = L.marker([						36.085359, 	-115.147959], {
  draggable: true,
  title: "My Ninth Marker"
}).addTo(myMap);

// Binding a pop-up to our marker
marker.bindPopup("LAS");

var marker = L.marker([					28.432248, 	-81.306538], {
  draggable: true,
  title: "My Tenth Marker"
}).addTo(myMap);

// Binding a pop-up to our marker
marker.bindPopup("MCO");

var marker = L.marker([					45.588654, 	-122.593117], {
  draggable: true,
  title: "My Eleventh Marker"
}).addTo(myMap);

// Binding a pop-up to our marker
marker.bindPopup("PDX");



