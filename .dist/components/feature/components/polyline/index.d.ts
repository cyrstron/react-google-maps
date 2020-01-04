/// <reference types="googlemaps" />
/// <reference types="react" />
import { FeatureEventName, FeatureHandlerName } from "../../services/eventable-feature-service";
import { PolylineService } from './services';
export declare type PolylineEventHandler = google.maps.MapMouseEventHandler | google.maps.MapPolyEventHandler;
export declare type PolylineProps = google.maps.PolylineOptions & {
    [key in PolylineHandlerName]?: PolylineEventHandler;
} & {
    path: google.maps.LatLngLiteral[];
};
export declare type PolylineEventName = FeatureEventName;
export declare type PolylineHandlerName = FeatureHandlerName;
export declare type PolylineEventNames = {
    [key in PolylineHandlerName]: PolylineEventName;
};
export { Polyline } from './polyline';
export { DumbPolyline } from './dumb-polyline';
export declare const withSmartPolylineCtx: <WrappedProps extends {}>(Wrapped: import("react").ComponentType<WrappedProps>) => (props: WrappedProps) => JSX.Element;
export declare const withDumbPolylineCtx: <WrappedProps extends {}>(Wrapped: import("react").ComponentType<WrappedProps & {
    service: PolylineService;
}>) => (props: WrappedProps) => JSX.Element | null;
export { usePolylineCtx } from './hooks';
export { PolylineService };
