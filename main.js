function monitorTraffic(cityBlock) {
	const vehicleCount = [12, 5, 30, 8, 15];
	console.log("Starting Traffic Report for: " + cityBlock);

	for (let i = 0; i < vehicleCount.length; i++) {
		letcount = vehicleCount[i];
		if (count > 20) {
			console.log("Heavy traffic at sensor " + i + ": " + count + " cars");
		} else {
			console.log("Light traffic at sensor " + i + ": " + count + " cars");
		}
	}
	return "Analysis Complete";
}

monitorTraffic("Kabarak Main Gate");
