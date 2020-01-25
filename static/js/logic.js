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
var planeIcon = L.icon({
    iconUrl: 'https://files.slack.com/files-pri/TKQ71KRRA-FSSHUAQBD/plane.png',
    // shadowUrl: 'leaf-shadow.png',
    iconSize: [60, 60], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [45, 45], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});
for (var i = 0; i < locations.length; i++) {
    L.marker([locations[i].LAT, locations[i].LONG], {
        draggable: false,
        icon: planeIcon,
        title: locations[i].Airport
    }).bindPopup(`${locations[i].Airport}`).addTo(myMap);
}
var query = "Resources/json/flights.json"
var response = d3.json(query).then((data) => {
        // console.log(data);
        return data;
    })
    // Building the dropdown
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
function drawCalendar(calResults) {
    console.log(calResults);
    var weeksInMonth = function(month) {
        var m = d3.timeMonth.floor(month)
        return d3.timeWeeks(d3.timeWeek.floor(m), d3.timeMonth.offset(m, 1)).length;
    }
    var minDate = d3.min(calResults, function(d) { return new Date(d.day) })
    var maxDate = d3.max(calResults, function(d) { return new Date(d.day) })
    var cellMargin = 2,
        cellSize = 20;
    var day = d3.timeFormat("%w"),
        week = d3.timeFormat("%U"),
        format = d3.timeFormat("%m-%d-%Y"), //format = d3.timeFormat("%Y-%m-%d"),// //format = d3.timeFormat("%Y-%m-%d"),
        titleFormat = d3.utcFormat("%a, %d-%b");
    monthName = d3.timeFormat("%B"),
        months = d3.timeMonth.range(d3.timeMonth.floor(minDate), maxDate);
    var svg = d3.select("#calendar").selectAll("svg")
        .data(months)
        .enter().append("svg")
        .attr("class", "month")
        .attr("height", ((cellSize * 7) + (cellMargin * 8) + 20)) // the 20 is for the month labels
        .attr("width", function(d) {
            var columns = weeksInMonth(d);
            return ((cellSize * columns) + (cellMargin * (columns + 1)));
            console.log(cellSize);
        })
        .append("g")
    svg.append("text")
        .attr("class", "month-name")
        .attr("y", (cellSize * 7) + (cellMargin * 8) + 15)
        .attr("x", function(d) {
            var columns = weeksInMonth(d);
            return (((cellSize * columns) + (cellMargin * (columns + 1))) / 2);
        })
        .attr("text-anchor", "middle")
        .text(function(d) { return monthName(d); })
    var rect = svg.selectAll("rect.day")
        .data(function(d, i) { return d3.timeDays(d, new Date(d.getFullYear(), d.getMonth() + 1, 1)); })
        .enter().append("rect")
        .attr("class", "day")
        .attr("width", cellSize)
        .attr("height", cellSize)
        .attr("rx", 3).attr("ry", 3) // rounded corners
        .attr("fill", '#eaeaea') // default light grey fill
        .attr("y", function(d) { return (day(d) * cellSize) + (day(d) * cellMargin) + cellMargin; })
        .attr("x", function(d) { return ((week(d) - week(new Date(d.getFullYear(), d.getMonth(), 1))) * cellSize) + ((week(d) - week(new Date(d.getFullYear(), d.getMonth(), 1))) * cellMargin) + cellMargin; })
        .on("mouseover", function(d) {
            d3.select(this).classed('hover', true);
        })
        .on("mouseout", function(d) {
            d3.select(this).classed('hover', false);
        })
        .datum(format);
    rect.append("title")
        .text(function(d) { return titleFormat(new Date(d)); });
    var lookup = d3.nest()
        .key(function(d) { return d.day; })
        .rollup(function(leaves) {
            return d3.sum(leaves, function(d) { return parseInt(d.count); });
        })
        .object(calResults);
    var scale = d3.scaleLinear()
        .domain(d3.extent(calResults, function(d) { return parseInt(d.count); }))
        .range([0.4, 1]); // the interpolate used for color expects a number in the range [0,1] but i don't want the lightest part of the color scheme

    rect.filter(function(d) { return d in lookup; })
        .style("fill", function(d) { return d3.interpolateYlGn(scale(lookup[d])); })
        .select("title")
        .text(function(d) { return titleFormat(new Date(d)) + ":  " + lookup[d]; });
}

function updateData() {
    console.log("hi")
    var selectMenu = d3.select("#selDataset")
    var dataSelector = selectMenu.property('value')
        //var calResults = mapSwitch(dataSelector)
    if (dataSelector === "Select Airline") {
        dataSelector = "Delta Airlines";
    }
    getCalendarData(dataSelector);
    //drawCalendar(calResults);
}

d3.select("#selDataset").on("change", updateData())

function getCalendarData(airline) {
    d3.json("Resources/JSON/flights.json").then((testData) => {
        //console.log(testData.data);
        testData.data.forEach(function(data) {
            var badSlash = "/";
            data.Date = data.Date.replace(badSlash, "-").replace(badSlash, "-");
            //console.log(data);
        });

        function getPDXarrive(data) {
            return data.Carrier_Code === airline;
        }

        var toPDX = testData.data.filter(getPDXarrive);
        //console.log(toPDX);


        var dateString = toPDX.map(planes => planes.Date);

        console.log(dateString);
        var flightCount = dateString.length;
        //console.log(flightCount);

        function getUnique(value, index, self) {
            return self.indexOf(value) === index;
        }

        var uniqueDates = dateString.filter(getUnique);
        //console.log(uniqueDates);

        var dateCount = [];
        for (var j = 0; j < uniqueDates.length; j++) {
            var counter = 0;
            for (var i = 0; i < dateString.length; ++i) {
                if (dateString[i] === uniqueDates[j])
                    counter++;
            };
            dateCount.push({
                day: uniqueDates[j],
                count: counter
            });
        }
        //return dateCount;
        drawCalendar(dateCount);
        //console.log(dateCount);
    }).catch(function(error) {
        console.log(error);
    });
};

function mapSwitch() {
    switch (query) {
        case "American Airlines":
            if (response.data[i].Carrier_Code == dataSelector) {
                results.push({
                    day: response.data[i].Departure_Delay,
                    count: response.data[i].Date
                })
            }
            break
        case "Delta Airlines":
            if (response.data[i].Carrier_Code == dataSelector) {
                results.push({
                    day: response.data[i].Departure_Delay,
                    count: response.data[i].Date
                })
            }
            break
        case "Alaska Airlines":
            if (response.data[i].Carrier_Code == dataSelector) {
                results.push({
                    day: response.data[i].Departure_Delay,
                    count: response.data[i].Date
                })
            }
            break
        case "Southwest Airlines":
            if (response.data[i].Carrier_Code == dataSelector) {
                results.push({
                    day: response.data[i].Departure_Delay,
                    count: response.data[i].Date
                })
            }
            break
        case "United Airlines":
            if (response.data[i].Carrier_Code == dataSelector) {
                results.push({
                    day: response.data[i].Departure_Delay,
                    count: response.data[i].Date
                })
            }
            break
    }
}