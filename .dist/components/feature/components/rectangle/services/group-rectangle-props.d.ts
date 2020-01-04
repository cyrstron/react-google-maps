/// <reference types="googlemaps" />
import { RectangleEventHandler, RectangleHandlerName } from '..';
export interface SortedRectangleProps {
    options?: google.maps.RectangleOptions;
    handlers?: {
        [key in RectangleHandlerName]: RectangleEventHandler;
    };
}
export declare const groupRectangleProps: ({ onClick, onDblClick, onDrag, onDragEnd, onDragStart, onMouseOut, onMouseOver, onRightClick, onMouseDown, onMouseMove, onMouseUp, onBoundChanged, ...options }: {
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
    onBoundChanged?: google.maps.MapMouseEventHandler | google.maps.MapPolyEventHandler | undefined;
} & google.maps.RectangleOptions) => SortedRectangleProps;
