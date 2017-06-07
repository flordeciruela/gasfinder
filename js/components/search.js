'use strict';

const LoadStations = (update) => {
	const stationContainer = $('<div class="station-container container"></div>');
	state.stations.forEach((stationObj) => {

		const divider = $('<div class"divider col s12"></div>');
		const stationItem = $('<div class"station-item row section"></div>');
		const datos = $('<div class"left-align col s11"></div>');
		const name = $('<h5>'+stationObj.name+'</h5>');
		const address = $('<p>'+stationObj.address+'</p>');
		const district = $('<p>'+stationObj.district+'</p>');
		const iconDiv = $('<div class"right-align col s1"></div>');
		const icon = $('<a href="#" class="fa fa-map icon-map"></a>');

		stationContainer.append(divider);
		datos.append(name);
		datos.append(address);
		datos.append(district);
		iconDiv.append(icon);
		stationItem.append(datos);
		stationItem.append(iconDiv);
		stationContainer.append(stationItem);
  });

  return stationContainer;

}

const Search = (update) => {
	const divMostrar = $('<div class="container" id="content-form"></div>');
	const rowForm = $('<div class="row row-form"></div>');
	const contentInput = $('<form class="input-field col s12 valign-wrapper"></form>');
	const iconInput = $('<i class="material-icons prefix">search</i>');
	const input = $('<input id="input" type="text" placeholder="Ingresa tu distrito a buscar">');

	input.on("keyup", (e) => {
	//e.preventDefault();
	$(".station-container").empty();
	const filterStations = filterByDistrict(state.stations, $(e.currentTarget).val());
	reRender(divMostrar, filterStations,update);

	});

	contentInput.append(iconInput);
	contentInput.append(input);
	rowForm.append(contentInput);
	rowForm.append(divMostrar);
	return rowForm;

}

const reRender = (container, filterStations, update) => {
  container.empty();
  //console.log(container);
  filterStations.forEach((station) => {
    container.append(ContentStations(station, update));
  });
}

const ContentStations = (station, update) => {
	const stationItem = $('<div class"station-item"></div>');
	const datos = $('<div class"left-align"></div>');
	const name = $('<h5>'+station.name+'</h5>');
	const address = $('<p>'+station.address+'</p>');
	const district = $('<p>'+station.district+'</p>');
	const iconDiv = $('<div class"right-align"></div>');
	const icon = $('<a href="#" class="fa fa-map icon-map"></a>');

	datos.append(name);
	datos.append(address);
	datos.append(district);
	iconDiv.append(icon);
	stationItem.append(datos);
	stationItem.append(iconDiv);

	icon.on("click", (e) => {
	e.preventDefault();
	state.selectedStation = station;
	//update();
	});

	return stationItem;
}

const StationDetails = (update) => {

	$('.fa-map').on("click", (e) => {
		//e.preventDefault();
		$(".station-container").empty();
		$(".row-form").empty();
	//update();
	});

}
