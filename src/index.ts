/// <reference types="../src/@types" />

export {
  GoogleApiCtxConsumer,
  GoogleApiCtxProvider,
  GoogleApiProvider,
  withGoogleApi,
} from './components/google-api';

export {
  SmartMap,
  DumbMap, 
  Map, 
  MapService,
  withDumbMapCtx,
  withSmartMapCtx,
  withDumbCreateMapCtx,
} from './components/map';
// export {
//   CustomOverlay,
//   SmartCustomOverlay,
//   DumbCustomOverlay,
//   withSmartCustomOverlayCtx,
//   CustomOverlayStore,
// } from './components/custom-overlay';
// export {
//   TilesOverlay,
//   SmartTilesOverlay,
//   DumbGridMapType,
//   withSmartGridMapTypeCtx,
//   TilesOverlayStore,
// } from './components/tiles-overlay';
// export {
//   Polygon,
//   SmartPolygon,
//   DumbPolygon,
//   withSmartPolygonCtx,
//   PolygonStore,
//   Polyline,
//   SmartPolyline,
//   DumbPolyline,
//   withSmartPolylineCtx,
//   PolylineStore,
//   DumbMarker,
//   SmartMarker,
//   withSmartMarkerCtx,
//   MarkerStore,
//   Marker,
//   FeatureContext,
//   withSmartFeatureCtx,
//   withDumbFeatureCtx,
//   withFullFeatureCtx,
// } from './components/feature';