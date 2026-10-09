const leafletMap = L.map('leaflet-map', {

    center: [39.9334, 32.8597],

    zoom: 10,

    worldCopyJump: false

});


L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',

    {

        maxZoom: 19,

        noWrap: true,

        attribution:
            '&copy; OpenStreetMap contributors'

    }

).addTo(leafletMap);
const leafletLocations = [

    {
        name: 'Hacettepe University',
        coordinates: [39.8671, 32.7335]
    },

    {
        name: 'Anitkabir',
        coordinates: [39.9251, 32.8055]
    },

    {
        name: 'Ankara Castle',
        coordinates: [39.9410, 32.8641]
    },

    {
        name: 'Kizilay Square',
        coordinates: [39.9208, 32.8533]
    }

];


const leafletMarkerGroup = L.layerGroup();


leafletLocations.forEach(function(location) {

    L.marker(location.coordinates)

        .bindPopup(
            '<b>' +
            location.name +
            '</b><br>Ankara, Türkiye'
        )

        .addTo(leafletMarkerGroup);

});


function updateLeafletMarkers() {

    const currentZoom =
        leafletMap.getZoom();


    if (currentZoom >= 11) {

        if (
            !leafletMap.hasLayer(
                leafletMarkerGroup
            )
        ) {

            leafletMarkerGroup.addTo(
                leafletMap
            );

        }

    } else {

        if (
            leafletMap.hasLayer(
                leafletMarkerGroup
            )
        ) {

            leafletMap.removeLayer(
                leafletMarkerGroup
            );

        }

    }

}


leafletMap.on(
    'zoomend',
    updateLeafletMarkers
);


updateLeafletMarkers();