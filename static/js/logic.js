// // Creating our initial map object
// // We set the longitude, latitude, and the starting zoom level
// // This gets inserted into the div with an id of 'map'
var myMap = L.map("map", {
    center: [37.0902, -95.7129],
    zoom: 4
});


// // Adding a tile layer (the background map image) to our map
// // We use the addTo method to add objects to our map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 8,
    id: "mapbox.streets",
    accessToken: API_KEY
}).addTo(myMap);

for (var i = 0; i < locations.length; i++) {
    L.marker([locations[i].LAT, locations[i].LONG], {
        draggable: false,
        title: locations[i].Airport
    }).bindPopup(`${locations[i].Airport}`).addTo(myMap);
}

var query = "Resources/json/flights.json"

d3.json(query).then((data) => {
    console.log(data)
})

// Building the dropdown options
airlines = [
    "American Airlines",
    "Alaska Airlines",
    "Southwest Airlines",
    "United Airlines",
    "Delta Airlines"
]

var select = document.getElementById("selDataset")
for (var i = 0; i < airlines.length; i++) {
    var option = airlines[i]
    var element = document.createElement("option")
    element.textContent = option
    element.value = option
    select.append(element)
}

// Building event listener for graph / data change

d3.select("#selDataset").on("change", function() {
    d3.event.preventDefault()
    var selectMenu = d3.select("#selDataset")
    var dataSelector = selectMenu.property('value')
    var calResults = d3.json(query).then((response) => {
        var results = []
        for (var i = 0; i < response.data.length; i++) {
            if (response.data[i].Carrier_Code == dataSelector) {
                results.push({
                    day: response.data[i].Departure_Delay,
                    count: response.data[i].Date
                })
            }
        }
    })
    drawCalendar(calResults)
})