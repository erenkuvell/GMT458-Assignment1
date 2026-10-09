# GMT 458 – Web GIS
## Assignment 1 – Personal Web Page

This project was developed for the GMT 458 Web GIS course
at Hacettepe University.

The aim of this project is to create a personal web page using
HTML, CSS, OpenLayers and Leaflet.

---

## Pages

The website consists of four HTML pages:

- Home
- About
- Projects
- Web GIS

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- OpenLayers
- Leaflet
- OpenStreetMap
- Git
- GitHub Pages

---

## Assignment Features

The project includes:

- Multiple HTML pages
- CSS animation
- Tabular information with images
- OpenLayers interactive map
- Leaflet interactive map
- Zoom-dependent marker visibility
- Prevention of horizontal world repetition
- Interactive map markers and popups

---

## Issue 1 – Marker Overlap

When many markers are displayed at low zoom levels,
they may overlap and negatively affect map readability.

In the OpenLayers implementation, the marker layer uses
a minimum zoom threshold.

Markers become visible when the map is zoomed in beyond
the selected threshold.

In the Leaflet implementation, marker visibility is
controlled by listening to map zoom events.

---

## Issue 2 – Repeating World

Web maps may repeat the world horizontally when the user
zooms out or pans beyond the normal world extent.

In OpenLayers, horizontal repetition is prevented using:

`wrapX: false`

In Leaflet, horizontal tile repetition is prevented using:

`noWrap: true`

---

## AI Usage

Before using AI assistance, I first reviewed the assignment
requirements and researched the relevant Web GIS concepts.

AI assistance was used to better understand specific
implementation details, including:

- how zoom thresholds can control marker visibility,
- how OpenLayers `minZoom` works for vector layers,
- how OpenLayers `wrapX` affects world repetition,
- how Leaflet zoom events can control marker layers,
- how Leaflet `noWrap` prevents repeated map tiles,
- how OpenLayers overlays can be used to create popups.

Estimated total AI usage:

**Approximately 2 hours**

---

## Author

ADEM EREN KUVEL  
Geomatics Engineering  
Hacettepe University  
2026