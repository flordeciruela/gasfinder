'use strict';

const PrintDetails = (update) => {
	const contentDetails = $('<div class="container content-details"></div>');
	const rowDetails = $('<div class="row"></div>');
	const map = $('<div id="map" class="col s12"></div>');
	const contentInfo = $('<div id="content-info" class="col s12"></div>');
	const pInfo = $('<p></p>');
	const spanNombre = $('<span></span>');
	const spanKm = $('<span></span>');
	const divProducts = $('<div class="products"></div>');

	contentDetails.append(rowMap);
	rowDetails.append(map);
	rowDetails.append(contentInfo);
	contentInfo.append(pInfo);
	pInfo.append(spanNombre);
	pInfo.append(spanKm);
	contentInfo.append(divProducts);

	function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 6
    });
    var infoWindow = new google.maps.InfoWindow({map: map});

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {

      handleLocationError(false, infoWindow, map.getCenter());
    }
  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
  }

}
