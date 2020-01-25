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
console.log("All Done")

    // Southwest Filter
    function selectSouthwest(flights) {
        return flights.Carrier_Code === "Southwest Airlines";
    };
    var southwestFilter = testData.data.filter(selectSouthwest);
    var southwestMap = southwestFilter.map(planes => planes.Carrier_Code);
    console.log("Southwest Done")

// Delta Filter
function selectDelta(flights) {
    return flights.Carrier_Code === "Delta Airlines";
};
var deltaFilter = testData.data.filter(selectDelta);
var deltaMap = deltaFilter.map(planes => planes.Carrier_Code);
console.log("Delta Done")

// United Filter
function selectUnited(flights) {
    return flights.Carrier_Code === "United Airlines";
};
var UnitedFilter = testData.data.filter(selectUnited);
var UnitedMap = UnitedFilter.map(planes => planes.Carrier_Code);
console.log("United Done")

// American Filter
function selectAmerican(flights) {
    return flights.Carrier_Code === "American Airlines";
};
var AmericanFilter = testData.data.filter(selectAmerican);
var AmericanMap = AmericanFilter.map(planes => planes.Carrier_Code);
console.log("American Done")

// Alaskan Filter
function selectAlaska(flights) {
    return flights.Carrier_Code === "Alaska Airlines";
};
var AlaskaFilter = testData.data.filter(selectAlaska);
var AlaskaMap = AlaskaFilter.map(planes => planes.Carrier_Code);
console.log("Alaska Done")


// Select function based on drop down selection

// filter = d3.select("#selDataset").property(value)

// if(filter === "Southwest"){
//         graphData === southwestMap;}
//     else if(filter === "United"){
//         graphData === unitedMap;}
//     else if(filter === "Delta"){
//         graphData === deltaMap;}
//     else if(filter === "American"){
//         graphData === americanMap;}
//     else if(filter === "Alaska"){
//         graphData === alaskaMap;}
//     else {graphData === allMap;
// }
});



// function dropDown = d3.select("#")

// Filters for Airlines & Mean Delay computation 

// //Southwest
// function selectSouthwest(query) {
//     return query.data.Carrier_Code === "Southwest";}
//     console.log(query)
//   var southwestFilter = data.filter(selectSouthwest);
//  {
//     return query.data.Carrier_Code === "Southwest";
//     return console.log("working")
//   }
//   var southwestFilter = data.filter(selectSouthwestSW);

// function mean(southwestFilter){
//     var total = 0;
//     for(var i = 0; i < query.length; i++){
//         total += query[i];
//     }
//     var southwestMean = total / query.length;
//     return southwestMean;
// }
// console.log('Mean calculated')

// // Alaskan


// // American


// // Delta


// // United



// // Build the If/Else logic
// if(filter === "Southwest"){
//         graphData === southwestMean;}
//     else if(filter === "United"){
//         graphData === unitedMean;}
//     else if(filter === "Delta"){
//         graphData === deltaMean;}
//     else if(filter === "American"){
//         graphData === americanMean;}
//     else {graphData === alaskanMean;}
//     }