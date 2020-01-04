/// <reference types="googlemaps" />
/// <reference types="react" />
import { FeatureEventName, FeatureHandlerName } from "../../services/eventable-feature-service";
import { RectangleService } from './services';
export declare type RectangleEventHandler = google.maps.MapMouseEventHandler | google.maps.MapPolyEventHandler;
export declare type RectangleProps = google.maps.RectangleOptions & {
    [key in RectangleHandlerName]?: RectangleEventHandler;
} & {
    paths: google.maps.LatLngLiteral[] | google.maps.LatLngLiteral[][];
};
export declare type RectangleEventName = FeatureEventName | 'bounds_changed';
export declare type RectangleHandlerName = FeatureHandlerName | 'onBoundChanged';
export declare type RectangleEventNames = {
    [key in RectangleHandlerName]: RectangleEventName;
};
export { Rectangle } from './rectangle';
export { DumbRectangle } from './dumb-rectangle';
export declare const withSmartRectangleCtx: <WrappedProps extends {}>(Wrapped: import("react").ComponentType<WrappedProps>) => (props: WrappedProps) => JSX.Element;
export declare const withDumbRectangleCtx: <WrappedProps extends {}>(Wrapped: import("react").ComponentType<WrappedProps & {
    service: RectangleService;
}>) => (props: WrappedProps) => JSX.Element | null;
export { useRectangleCtx } from './hooks';
export { RectangleService };
