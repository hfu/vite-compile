import maplibregl from 'maplibre-gl'

const map = new maplibregl.Map({
  container: 'map',
  style: 'https://demotiles.maplibre.org/style.json',
  center: [139.6917, 35.6895],
  zoom: 8
})

