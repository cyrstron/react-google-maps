import {Map as DumbMap} from './map';
import {withSmartMapCtx} from './hocs/with-smart-map-ctx';

export {withSmartMapCtx, DumbMap};

export const Map = withSmartMapCtx<MapProps>(DumbMap);

export {MapService} from './services';
export {withDumbMapCtx} from './hocs/with-dumb-map-ctx';
export {useMapCtx} from './hooks/use-map-ctx';

import { 
  MapsObjectEventProps, 
  MapsObjectHandlerName, 
  MapsObjectEventName 
} from "../../";

export type MapEventHandler = google.maps.MapMouseEventHandler | 
  google.maps.MapEventHandler | 
  google.maps.MapIconEventHandler;
  
export type MapEventsProps = MapsObjectEventProps & {
  onMouseMove?: google.maps.MapMouseEventHandler;
  onBoundsChanged?: google.maps.MapEventHandler;
  onCenterChanged?: google.maps.MapEventHandler;
  onHeadingChanged?: google.maps.MapEventHandler;
  onIdle?: google.maps.MapEventHandler;
  onMaptypeIdChanged?: google.maps.MapEventHandler;
  onProjectionChanged?: google.maps.MapEventHandler;
  onTilesLoaded?: google.maps.MapEventHandler;
  onTiltChanged?: google.maps.MapEventHandler;
  onZoomChanged?: google.maps.MapEventHandler;
  onClick?: google.maps.MapMouseEventHandler | google.maps.MapIconEventHandler;
}

export type MapProps = MapEventsProps & google.maps.MapOptions & {
  className?: string; 
  bounds?: google.maps.LatLngBoundsLiteral;
  defaultCenter: google.maps.LatLngLiteral;
  zoom: number;
};

export type MapMouseHandlerName = MapsObjectHandlerName |
  'onMouseMove';

export type MapOtherHandlerName = 'onBoundsChanged' |
  'onCenterChanged' |
  'onHeadingChanged' |
  'onIdle' |
  'onMaptypeIdChanged' |
  'onProjectionChanged' |
  'onTilesLoaded' |
  'onTiltChanged' |
  'onZoomChanged';

export type MapHandlerName = MapMouseHandlerName | MapOtherHandlerName;

export type MapEventName = MapsObjectEventName | 
  'bounds_changed' |
  'center_changed' |
  'heading_changed' |
  'idle' |
  'maptypeid_changed' |
  'mousemove' |
  'projection_changed' |
  'tilesloaded' |
  'tilt_changed' |
  'zoom_changed';

export type MapComponentHandler = (e?: google.maps.MouseEvent) => void;

export type MapEventNames = {
  [key in MapHandlerName]: MapEventName
};
