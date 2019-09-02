# react-google-maps

React components library for google maps.

```javascript
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
```

##### Implemented features:

* Marker
* Polygon
* Polyline
* TilesOverlay
* DomOverlay

##### Features to be implemented:

* Circle
* GroundOverlay
* Heatmap
* InfoWindow
* Rectangle

## `GoogleMapsProvider`

### Common API loading

```javascript
import {GoogleApiProvider} from 'react-google-maps-ts';

const App = () => (
  <GoogleApiProvider
    apiKey="<API_KEY>"
    geometry // include geometry library
    drawing // include drawing library
    places // include places library
    visualization // include visualization library
    language='en' // Google Maps localization
    region='GB'
    version='quarterly' // Google Maps versioning
  >
    <MyAwesomeApp />
  </GoogleApiProvider>
);
```

### Proxy API loading

You can load Google API using your own proxy

```javascript
import {GoogleApiProvider} from 'react-google-maps-ts';

const App = () => (
  <GoogleApiProvider
    proxy='<Your proxy URL>'
  >
    <MyAwesomeApp />
  </GoogleApiProvider>
);
```

### Custom loading callback

You can load Google API using your own proxy

```javascript
import {GoogleApiProvider} from 'react-google-maps-ts';

const load = async (): Promise<GoogleObject> => {
  // implementation

  return googleApi;
}

const App = () => (
  <GoogleApiProvider
    load={load}
  >
    <MyAwesomeApp />
  </GoogleApiProvider>
);
```

### Extending library with you own classes

You can load Google API using your own proxy

```javascript
import {GoogleApiProvider} from 'react-google-maps-ts';

const extend = async (google: Google): void => {
  google["<your namespace>"] = // your extension;
}

const App = () => (
  <GoogleApiProvider
    apiKey="<API_KEY>"
    extend={extend}
  >
    <MyAwesomeApp />
  </GoogleApiProvider>
);
```