// var svg = d3.select("#graph").selectAll("svg")

// var data = "Resources/json/flights.json"
// d3.json(query).then((data) => {
//     console.log(data.data.forEach())
// })

d3.json("Resources/JSON/flights.json").then((testData) => {
    // Default Filter
    function selectAll(flights) {
        return flights.Carrier_Code;
    };
    var allFilter = testData.data;
    var allMap = allFilter.map(planes => planes.Carrier_Code);
    // console.log(allFilter)

    // Southwest Filter
    function selectSouthwest(flights) {
        return flights.Carrier_Code === "Southwest Airlines";
    };
    var southwestFilter = testData.data.filter(selectSouthwest);
    var southwestMap = southwestFilter.map(planes => planes.Carrier_Code);
    // console.log("Southwest Done")

    // Delta Filter
    function selectDelta(flights) {
        return flights.Carrier_Code === "Delta Airlines";
    };
    var deltaFilter = testData.data.filter(selectDelta);
    var deltaMap = deltaFilter.map(planes => planes.Carrier_Code);
    // console.log("Delta Done")

    // United Filter
    function selectUnited(flights) {
        return flights.Carrier_Code === "United Airlines";
    };
    var UnitedFilter = testData.data.filter(selectUnited);
    var UnitedMap = UnitedFilter.map(planes => planes.Carrier_Code);
    // console.log("United Done")

    // American Filter
    function selectAmerican(flights) {
        return flights.Carrier_Code === "American Airlines";
    };
    var AmericanFilter = testData.data.filter(selectAmerican);
    var AmericanMap = AmericanFilter.map(planes => planes.Carrier_Code);
    // console.log("American Done")

    // Alaskan Filter
    function selectAlaska(flights) {
        return flights.Carrier_Code === "Alaska Airlines";
    };
    var AlaskaFilter = testData.data.filter(selectAlaska);
    var AlaskaMap = AlaskaFilter.map(planes => planes.Carrier_Code);
    // console.log("Alaska Done");


// // Select function based on drop down selection

filter = d3.select("#selDataset").property("value");

if(filter === "Southwest"){
        graphData(southwestFilter);}
    else if(filter === "United"){
        graphData(unitedFilter);}
    else if(filter === "Delta"){
        graphData(deltaFilter);}
    else if(filter === "American"){
        graphData(americanFilter);}
    else if(filter === "Alaska"){
        graphData(alaskaFilter);}
    else {
        graphData(allFilter);
};

// Graph

function graphData(airlineData){

    var data = [{
        type: 'bar',
        x: airlineData.map(planes => planes.Departure_Delay),
        y: airlineData.map(planes => planes.Origin_Airport),
        orientation: 'h'
    }];

    var layout={
        title: "Total Annual Delay by Airport",
        xaxis: {title: "Delay in Minutes"},
        yaxis: {title: "Airports"}
    }

    Plotly.newPlot('graph', data, layout);

    //   var allMap = allFilter.map(planes => planes.Carrier_Code);
    }

})