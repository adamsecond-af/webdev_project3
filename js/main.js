
function initMap() {
  const mapEl = document.getElementById('map');
  if (!mapEl) {
    return;
  }

  const chicago = { lat: 41.8832, lng: -87.6324 };
  const map = new google.maps.Map(mapEl, {
    center: chicago,
    zoom: 11,
  });

  const places = [
    {
      position: { lat: 41.8826, lng: -87.6226 },
      title: 'Millennium Park',
      info: 'Home of the Bean and one of my favorite spots in the city.'
    },
    {
      position: { lat: 41.8789, lng: -87.6359 },
      title: 'Willis Tower',
      info: 'The tallest building in Chicago with an incredible Skydeck.'
    },
  ];

  const infoWindow = new google.maps.InfoWindow();
  places.forEach(function (place) {
    const marker = new google.maps.Marker({
      position: place.position,
      map: map,
      title: place.title
    });

    marker.addListener('click', function () {
      infoWindow.setContent(
        '<div style="color:#0d0d0d"><strong>' +
          place.title +
          '</strong><br>' +
          place.info +
          '</div>'
      );
      infoWindow.open(map, marker);
    });
  });
}