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

  const infoWindow = new google.maps.InfoWindow({
    content: 'Welcome to Chicago!',
    position: chicago
  });

  infoWindow.open(map);
}