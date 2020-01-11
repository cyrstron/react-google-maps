/// <reference types="googlemaps" />
/// <reference types="react" />
import { FeatureEventName, FeatureHandlerName } from '../../services/eventable-feature-service';
import { PolygonService } from './services';
export declare type PolygonEventHandler = google.maps.MapMouseEventHandler | google.maps.MapPolyEventHandler;
export declare type PolygonProps = google.maps.PolygonOptions & {
    [key in PolygonHandlerName]?: PolygonEventHandler;
} & {
    paths: google.maps.LatLngLiteral[] | google.maps.LatLngLiteral[][];
};
export declare type PolygonEventName = FeatureEventName;
export declare type PolygonHandlerName = FeatureHandlerName;
export declare type PolygonEventNames = {
    [key in PolygonHandlerName]: PolygonEventName;
};
export { Polygon } from './polygon';
export { DumbPolygon } from './dumb-polygon';
export declare const withSmartPolygonCtx: <WrappedProps extends {}>(Wrapped: import("react").ComponentType<WrappedProps>) => (props: WrappedProps) => JSX.Element;
export declare const withDumbPolygonCtx: <WrappedProps extends {}>(Wrapped: import("react").ComponentType<WrappedProps & {
    service: PolygonService;
}>) => (props: WrappedProps) => JSX.Element | null;
export { usePolygonCtx } from './hooks';
export { PolygonService };
