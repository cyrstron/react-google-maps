/// <reference types="../src/@types" />

export {
  GoogleApiCtxConsumer,
  GoogleApiCtxProvider,
  GoogleApiProvider,
  withGoogleApi,
} from './components/google-api';

export {
  Map,
  DumbMap,
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
export {
  Polygon,
  DumbPolygon,
  withSmartPolygonCtx,
  withDumbPolygonCtx,
  PolygonService,
  Polyline,
  DumbPolyline,
  withSmartPolylineCtx,
  withDumbPolylineCtx,
  PolylineService,
  Marker,
  DumbMarker,
  withSmartMarkerCtx,
  withDumbMarkerCtx,
  MarkerService,
  FeatureCtxProvider,
  FeatureCtxConsumer,
  CreateFeatureCtxProvider,
  CreateFeatureCtxConsumer,
  withSmartFeatureCtx,
  withFullFeatureCtx,
  CreateServiceProps,
  CreateFeatureService,
  withDumbFeatureCtx,
  FeatureServiceProps,
  withCreateDumbFeatureCtx,
} from './components/feature';