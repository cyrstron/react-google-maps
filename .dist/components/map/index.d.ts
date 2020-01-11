/// <reference types="react" />
/// <reference types="googlemaps" />
import { Map as DumbMap } from './map';
import { withSmartMapCtx } from './hocs/with-smart-map-ctx';
export { withSmartMapCtx, DumbMap };
export { MapBroadcaster } from './components/map-broadcaster';
export declare const Map: import("react").ComponentType<MapProps>;
export { MapService } from './services';
export { withDumbMapCtx } from './hocs/with-dumb-map-ctx';
export { useMapCtx } from './hooks/use-map-ctx';
import { MapsObjectHandlerName, MapsObjectEventName } from '../../services/maps-eventable-object';
export declare type MapEventHandler = google.maps.MapMouseEventHandler | google.maps.MapEventHandler | google.maps.MapIconEventHandler;
export declare type MapEventsProps = {
    [key in MapHandlerName]?: MapEventHandler;
};
export declare type MapProps = MapEventsProps & google.maps.MapOptions & {
    className?: string;
    bounds?: google.maps.LatLngBoundsLiteral;
    defaultCenter: google.maps.LatLngLiteral;
    zoom: number;
};
export declare type MapMouseHandlerName = MapsObjectHandlerName | 'onMouseMove';
export declare type MapOtherHandlerName = 'onBoundsChanged' | 'onCenterChanged' | 'onHeadingChanged' | 'onIdle' | 'onMaptypeIdChanged' | 'onProjectionChanged' | 'onTilesLoaded' | 'onTiltChanged' | 'onZoomChanged';
export declare type MapHandlerName = MapMouseHandlerName | MapOtherHandlerName;
export declare type MapEventName = MapsObjectEventName | 'bounds_changed' | 'center_changed' | 'heading_changed' | 'idle' | 'maptypeid_changed' | 'mousemove' | 'projection_changed' | 'tilesloaded' | 'tilt_changed' | 'zoom_changed';
export declare type MapComponentHandler = (e?: google.maps.MouseEvent) => void;
export declare type MapEventNames = {
    [key in MapHandlerName]: MapEventName;
};
