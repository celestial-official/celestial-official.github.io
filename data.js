function returnData() {
	return fetch("https://api.ipify.org?format=json").then(response => response.json()).then(data => {
		return JSON.stringify(data);
	}).catch(error => {
		return JSON.strigify({error: "Couldn't fetch requested data."});
	});
}

returnData();
