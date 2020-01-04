/// <reference types="googlemaps" />
import { MapHandlerName, MapEventHandler, MapEventsProps } from '../';
export interface SortedMapProps {
    options?: google.maps.MapOptions;
    handlers?: {
        [key in MapHandlerName]: MapEventHandler;
    };
}
export declare const groupMapProps: ({ onBoundsChanged, onCenterChanged, onClick, onDblClick, onDrag, onDragEnd, onDragStart, onHeadingChanged, onIdle, onMaptypeIdChanged, onMouseMove, onMouseOut, onMouseOver, onProjectionChanged, onRightClick, onTilesLoaded, onTiltChanged, onZoomChanged, ...options }: MapEventsProps & google.maps.MapOptions) => SortedMapProps;
