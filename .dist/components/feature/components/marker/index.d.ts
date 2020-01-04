/// <reference types="googlemaps" />
/// <reference types="react" />
import { MarkerService } from './services';
import { FeatureEventName, FeatureHandlerName } from "../../services/eventable-feature-service";
export declare type MarkerEventHandler = google.maps.MapEventHandler | google.maps.MapMouseEventHandler;
export declare type MarkerProps = google.maps.MarkerOptions & {
    [key in MarkerHandlerName]?: MarkerEventHandler;
} & {
    position: google.maps.LatLngLiteral;
    title: string;
};
export declare type MarkerEventName = FeatureEventName | 'animation_changed' | 'clickable_changed' | 'cursor_changed' | 'draggable_changed' | 'flat_changed' | 'icon_changed' | 'mousedown' | 'mouseup' | 'position_changed' | 'shape_changed' | 'title_changed' | 'visible_changed' | 'zindex_changed';
export declare type MarkerHandlerName = FeatureHandlerName | 'onAnimationChanged' | 'onClickableChanged' | 'onCursorChanged' | 'onDraggableChanged' | 'onFlatChanged' | 'onIconChanged' | 'onMouseDown' | 'onMouseUp' | 'onPositionChanged' | 'onShapeChanged' | 'onTitleChanged' | 'onVisibleChanged' | 'onZIndexChanged';
export declare type MarkerEventNames = {
    [key in MarkerHandlerName]: MarkerEventName;
};
export { Marker } from './marker';
export { DumbMarker } from './dumb-marker';
export declare const withSmartMarkerCtx: <WrappedProps extends {}>(Wrapped: import("react").ComponentType<WrappedProps>) => (props: WrappedProps) => JSX.Element;
export declare const withDumbMarkerCtx: <WrappedProps extends {}>(Wrapped: import("react").ComponentType<WrappedProps & {
    service: MarkerService;
}>) => (props: WrappedProps) => JSX.Element | null;
export { useMarkerCtx } from './hooks';
export { MarkerService };
