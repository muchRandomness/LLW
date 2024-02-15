let map : google.maps.Map;
const center : google.maps.LatLngLiteral = {};
function birdmap() {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center,
    zoom: 8
  });

}
