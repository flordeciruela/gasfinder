'use strict';

const Search = (update) => {
	const contentInput = $('<form id="content-input"></form>');
	const input = $('<input id="input" type="text" placeholder="Ingresa tu distrito a buscar"></input>');
	contentInput.append(input);
	const objStations = state.stations;
	console.log(objStations);

	input.on('keydown',(e) => {
		//e.preventDefault();
		$(".station-container").empty();
		const textSearch = String.fromCharCode(e.which);
		//const textSearch = String.fromCharCode(e.which);
		console.log(textSearch);

		  state.stations.forEach((stationObj) => {

				console.log(stationObj.district);
				console.log(stationObj.district[0]);
				if (stationObj.district[0] == textSearch) {
					const stationItem = $('<div class"station-item"></div>');
					const name = $('<h5>'+stationObj.name+'</h5>');
					const address = $('<p>'+stationObj.address+'</p>');

					stationItem.append(name);
					stationItem.append(address);
					$(".station-container").append(stationItem);
				} else {
					console.log("error");
				}
		  });
		//update();
	});
	return contentInput;

}

const ContentStations = (update) => {
  const stationContainer = $('<div class="station-container"></div>');
  state.stations.forEach((stationObj) => {

		const stationItem = $('<div class"station-item"></div>');
		const name = $('<h5>'+stationObj.name+'</h5>');
		const address = $('<p>'+stationObj.address+'</p>');

		stationItem.append(name);
		stationItem.append(address);
    stationContainer.append(stationItem);
  });
  return stationContainer;
}
