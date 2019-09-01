# react-google-maps
React components library for google maps.

    import {GoogleApiProvider, Map, Marker} from '@grider/maps';

    const App = () => (
      <GoogleApiProvider
        apiKey="<API_KEY>"
      >
        <MyAwesomeApp />
      </GoogleApiProvider>
    );

    const MyAwesomeApp = () => (
      <Map
        defaultCenter={{lat: 50, lng: 50}}
      >
        <Marker 
          position={{lat: 50, lng: 50}}
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
