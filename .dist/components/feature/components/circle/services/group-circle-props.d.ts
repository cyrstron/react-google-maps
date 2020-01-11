/// <reference types="googlemaps" />
import { CircleEventHandler, CircleHandlerName } from '../';
export interface SortedCircleProps {
    options?: google.maps.CircleOptions;
    handlers?: {
        [key in CircleHandlerName]: CircleEventHandler;
    };
}
export declare const groupCircleProps: ({ onClick, onDblClick, onDrag, onDragEnd, onDragStart, onMouseOut, onMouseOver, onRightClick, onMouseDown, onMouseMove, onMouseUp, onCenterChanged, onRadiusChanged, ...options }: google.maps.CircleOptions & {
    onClick?: google.maps.MapMouseEventHandler | google.maps.MapPolyEventHandler | undefined;
    onDblClick?: google.maps.MapMouseEventHandler | google.maps.MapPolyEventHandler | undefined;
    onDrag?: google.maps.MapMouseEventHandler | google.maps.MapPolyEventHandler | undefined;
    onDragStart?: google.maps.MapMouseEventHandler | google.maps.MapPolyEventHandler | undefined;
    onDragEnd?: google.maps.MapMouseEventHandler | google.maps.MapPolyEventHandler | undefined;
    onMouseOut?: google.maps.MapMouseEventHandler | google.maps.MapPolyEventHandler | undefined;
    onMouseOver?: google.maps.MapMouseEventHandler | google.maps.MapPolyEventHandler | undefined;
    onRightClick?: google.maps.MapMouseEventHandler | google.maps.MapPolyEventHandler | undefined;
    onMouseMove?: google.maps.MapMouseEventHandler | google.maps.MapPolyEventHandler | undefined;
    onCenterChanged?: google.maps.MapMouseEventHandler | google.maps.MapPolyEventHandler | undefined;
    onMouseDown?: google.maps.MapMouseEventHandler | google.maps.MapPolyEventHandler | undefined;
    onMouseUp?: google.maps.MapMouseEventHandler | google.maps.MapPolyEventHandler | undefined;
    onRadiusChanged?: google.maps.MapMouseEventHandler | google.maps.MapPolyEventHandler | undefined;
}) => SortedCircleProps;
