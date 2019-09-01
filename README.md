# react-google-maps
React components library for google maps.

    import {GoogleApiProvider, Map, Marker} from 'react-google-maps-ts';

    const App = () => (
      <GoogleApiProvider
        apiKey="<API_KEY>"
      >
        <MyAwesomeApp />
      </GoogleApiProvider>
    );

    const geoPoint = {lat: 50, lng: 50};

    const MyAwesomeApp = () => (
      <Map
        defaultCenter={geoPoint}
      >
        <Marker 
          position={geoPoint}
          zoom={8}
          title="My perfect marker"
        />
      </Map>
    );

Implemented features:

Marker
Polygon
Polyline
Tiles (Tiles overlay)
Overlay (DOM overlay)

Features to be implemented:

Circle
GroundOverlay
Heatmap
InfoWindow
Rectangle
