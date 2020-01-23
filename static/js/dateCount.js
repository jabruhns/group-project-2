var airData;
//C:\Users\jasonpe\Documents\GitHub\projects\group-project-2\Resources\JSON
d3.json("data/data.json").then((testData) => {
    // Append an SVG group
    testData.forEach(function(data) {
        var badSlash = "/";
        data["Taxi-Out time (Minutes)"] = +data["Taxi-Out time (Minutes)"];
        data["Departure delay (Minutes)"] = +data["Departure delay (Minutes)"];
        data["Date (MM/DD/YYYY)"] = data["Date (MM/DD/YYYY)"].replace(badSlash, "-").replace(badSlash, "-");
    });
    airData = testData;


    // @TODO: YOUR CODE HERE!

    function getPDXarrive(data) {
        return data.Destination_Airport == "PDX";
    }

    var toPDX = testData.filter(getPDXarrive);


    var dateString = toPDX.map(planes => planes["Date (MM/DD/YYYY)"]);

    console.log(dateString);
    var flightCount = dateString.length;
    console.log(flightCount);

    function getUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    var uniqueDates = dateString.filter(getUnique);
    console.log(uniqueDates);

    var dateCount = [];
    for (var j = 0; j < uniqueDates.length; j++) {
        var count = 0;
        for (var i = 0; i < dateString.length; ++i) {
            if (dateString[i] === uniqueDates[j])
                count++;
        };
        dateCount.push({
            date: uniqueDates[j],
            flight: count
        });
    }
    console.log(dateCount);

});