function mapSwitch() {
    switch (response) {
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