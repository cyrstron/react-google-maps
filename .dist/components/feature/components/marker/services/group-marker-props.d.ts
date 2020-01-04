/// <reference types="googlemaps" />
import { MarkerHandlerName, MarkerEventHandler } from '..';
export interface SortedMarkerProps {
    options?: google.maps.MarkerOptions;
    handlers?: {
        [key in MarkerHandlerName]: MarkerEventHandler;
    };
}
export declare const groupMarkerProps: ({ onClick, onDblClick, onDrag, onDragEnd, onDragStart, onMouseOut, onMouseOver, onRightClick, onAnimationChanged, onClickableChanged, onCursorChanged, onDraggableChanged, onFlatChanged, onIconChanged, onMouseDown, onMouseUp, onPositionChanged, onShapeChanged, onTitleChanged, onVisibleChanged, onZIndexChanged, ...options }: {
    onClick?: google.maps.MapMouseEventHandler | google.maps.MapEventHandler | undefined;
    onDblClick?: google.maps.MapMouseEventHandler | google.maps.MapEventHandler | undefined;
    onDrag?: google.maps.MapMouseEventHandler | google.maps.MapEventHandler | undefined;
    onDragStart?: google.maps.MapMouseEventHandler | google.maps.MapEventHandler | undefined;
    onDragEnd?: google.maps.MapMouseEventHandler | google.maps.MapEventHandler | undefined;
    onMouseOut?: google.maps.MapMouseEventHandler | google.maps.MapEventHandler | undefined;
    onMouseOver?: google.maps.MapMouseEventHandler | google.maps.MapEventHandler | undefined;
    onRightClick?: google.maps.MapMouseEventHandler | google.maps.MapEventHandler | undefined;
    onMouseMove?: google.maps.MapMouseEventHandler | google.maps.MapEventHandler | undefined;
    onMouseDown?: google.maps.MapMouseEventHandler | google.maps.MapEventHandler | undefined;
    onMouseUp?: google.maps.MapMouseEventHandler | google.maps.MapEventHandler | undefined;
    onAnimationChanged?: google.maps.MapMouseEventHandler | google.maps.MapEventHandler | undefined;
    onClickableChanged?: google.maps.MapMouseEventHandler | google.maps.MapEventHandler | undefined;
    onCursorChanged?: google.maps.MapMouseEventHandler | google.maps.MapEventHandler | undefined;
    onDraggableChanged?: google.maps.MapMouseEventHandler | google.maps.MapEventHandler | undefined;
    onFlatChanged?: google.maps.MapMouseEventHandler | google.maps.MapEventHandler | undefined;
    onIconChanged?: google.maps.MapMouseEventHandler | google.maps.MapEventHandler | undefined;
    onPositionChanged?: google.maps.MapMouseEventHandler | google.maps.MapEventHandler | undefined;
    onShapeChanged?: google.maps.MapMouseEventHandler | google.maps.MapEventHandler | undefined;
    onTitleChanged?: google.maps.MapMouseEventHandler | google.maps.MapEventHandler | undefined;
    onVisibleChanged?: google.maps.MapMouseEventHandler | google.maps.MapEventHandler | undefined;
    onZIndexChanged?: google.maps.MapMouseEventHandler | google.maps.MapEventHandler | undefined;
} & google.maps.MarkerOptions) => SortedMarkerProps;
