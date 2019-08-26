/// <reference path="@types/index.d.ts" />

export type MapsObjectHandlerName = 'onClick' |
  'onDblClick' |
  'onDrag' |
  'onDragStart' |
  'onDragEnd' |
  'onMouseOut' |
  'onMouseOver' |
  'onRightClick';

export type MapsObjectEventName = 'click' |
  'dblclick' |
  'drag' |
  'dragstart' |
  'dragend' |
  'mouseout' |
  'mouseover' |
  'rightclick';

export interface MapsObjectEventProps {
  onClick?: google.maps.MapMouseEventHandler;
  onDblClick?: google.maps.MapMouseEventHandler;
  onDrag?: google.maps.MapMouseEventHandler;
  onDragStart?: google.maps.MapMouseEventHandler;
  onDragEnd?: google.maps.MapMouseEventHandler;
  onMouseOut?: google.maps.MapMouseEventHandler;
  onMouseOver?: google.maps.MapMouseEventHandler;
  onRightClick?: google.maps.MapMouseEventHandler;
}

export {
  GoogleApiProvider,
  withGoogleApi,
  useGoogleCtx,
  useGoogleApi
} from './components/google-api';

export {
  Map,
  DumbMap,
  MapService,
  withDumbMapCtx,
  withSmartMapCtx,
  useMapCtx,
} from './components/map';
export {
  CustomOverlay,
  DumbCustomOverlay,
  withDumbOverlayCtx,
  withSmartOverlayCtx,
  CustomOverlayService,
} from './components/feature/components/eventless-feature/components/custom-overlay';
export {
  TilesOverlay,
  DumbTilesOverlay,
  withDumbTilesCtx,
  withSmartTilesCtx,
  TilesOverlayService,
} from './components/feature/components/eventless-feature/components/tiles-overlay';
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
} from './components/feature/components/eventable-feature';