/// <reference types="googlemaps" />
import { PolylineHandlerName, PolylineEventHandler } from '..';
export interface SortedPolylineProps {
    options?: google.maps.PolylineOptions;
    handlers?: {
        [key in PolylineHandlerName]: PolylineEventHandler;
    };
}
export declare const groupPolylineProps: ({ onClick, onDblClick, onDrag, onDragEnd, onDragStart, onMouseOut, onMouseOver, onRightClick, onMouseDown, onMouseMove, onMouseUp, ...options }: google.maps.PolylineOptions & {
    onClick?: google.maps.MapMouseEventHandler | google.maps.MapPolyEventHandler | undefined;
    onDblClick?: google.maps.MapMouseEventHandler | google.maps.MapPolyEventHandler | undefined;
    onDrag?: google.maps.MapMouseEventHandler | google.maps.MapPolyEventHandler | undefined;
    onDragStart?: google.maps.MapMouseEventHandler | google.maps.MapPolyEventHandler | undefined;
    onDragEnd?: google.maps.MapMouseEventHandler | google.maps.MapPolyEventHandler | undefined;
    onMouseOut?: google.maps.MapMouseEventHandler | google.maps.MapPolyEventHandler | undefined;
    onMouseOver?: google.maps.MapMouseEventHandler | google.maps.MapPolyEventHandler | undefined;
    onRightClick?: google.maps.MapMouseEventHandler | google.maps.MapPolyEventHandler | undefined;
    onMouseMove?: google.maps.MapMouseEventHandler | google.maps.MapPolyEventHandler | undefined;
    onMouseDown?: google.maps.MapMouseEventHandler | google.maps.MapPolyEventHandler | undefined;
    onMouseUp?: google.maps.MapMouseEventHandler | google.maps.MapPolyEventHandler | undefined;
}) => SortedPolylineProps;
