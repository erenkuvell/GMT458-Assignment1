const openLayersMap = new ol.Map({

    target: 'ol-map',

    layers: [

        new ol.layer.Tile({

            source: new ol.source.OSM({
                wrapX: false
            })

        })

    ],

    view: new ol.View({

        center: ol.proj.fromLonLat([
            32.8597,
            39.9334
        ]),

        zoom: 10

    })

});
const locations = [

    {
        name: 'Hacettepe University',
        coordinates: [32.7335, 39.8671]
    },

    {
        name: 'Anitkabir',
        coordinates: [32.8055, 39.9251]
    },

    {
        name: 'Ankara Castle',
        coordinates: [32.8641, 39.9410]
    },

    {
        name: 'Kizilay Square',
        coordinates: [32.8533, 39.9208]
    }

];


const markerFeatures = locations.map(function(location) {

    return new ol.Feature({

        geometry: new ol.geom.Point(

            ol.proj.fromLonLat(
                location.coordinates
            )

        ),

        name: location.name

    });

});


const markerSource = new ol.source.Vector({

    features: markerFeatures,

    wrapX: false

});


const markerLayer = new ol.layer.Vector({

    source: markerSource,

    minZoom: 11,

    style: new ol.style.Style({

        image: new ol.style.Circle({

            radius: 8,

            fill: new ol.style.Fill({
                color: '#38bdf8'
            }),

            stroke: new ol.style.Stroke({
                color: '#ffffff',
                width: 2
            })

        })

    })

});


openLayersMap.addLayer(markerLayer);
// OPENLAYERS POPUP

const popupContainer =
    document.getElementById('ol-popup');

const popupContent =
    document.getElementById('ol-popup-content');

const popupCloser =
    document.getElementById('ol-popup-closer');


const popupOverlay = new ol.Overlay({

    element: popupContainer,

    autoPan: {
        animation: {
            duration: 250
        }
    }

});


openLayersMap.addOverlay(
    popupOverlay
);


popupCloser.onclick = function() {

    popupOverlay.setPosition(undefined);

    popupCloser.blur();

    popupContainer.style.display = 'none';

    return false;

};


openLayersMap.on(
    'singleclick',

    function(event) {

        const feature =
            openLayersMap.forEachFeatureAtPixel(

                event.pixel,

                function(feature) {
                    return feature;
                }

            );


        if (feature) {

            const coordinates =
                feature.getGeometry().getCoordinates();

            const name =
                feature.get('name');


            popupContent.innerHTML =
                '<b>' +
                name +
                '</b><br>Ankara, Türkiye';


            popupOverlay.setPosition(
                coordinates
            );


            popupContainer.style.display =
                'block';

        } else {

            popupOverlay.setPosition(
                undefined
            );

            popupContainer.style.display =
                'none';

        }

    }
);