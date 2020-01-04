/// <reference types="googlemaps" />
/// <reference types="react" />
import { FeatureEventName, FeatureHandlerName } from "../../services/eventable-feature-service";
import { CircleService } from './services';
export declare type CircleEventHandler = google.maps.MapMouseEventHandler | google.maps.MapPolyEventHandler;
export declare type CircleProps = google.maps.CircleOptions & {
    [key in CircleHandlerName]?: CircleEventHandler;
};
export declare type CircleEventName = FeatureEventName | 'center_changed' | 'radius_changed';
export declare type CircleHandlerName = FeatureHandlerName | 'onCenterChanged' | 'onRadiusChanged';
export declare type CircleEventNames = {
    [key in CircleHandlerName]: CircleEventName;
};
export { Circle } from './circle';
export { DumbCircle } from './dumb-circle';
export declare const withSmartCircleCtx: <WrappedProps extends {}>(Wrapped: import("react").ComponentType<WrappedProps>) => (props: WrappedProps) => JSX.Element;
export declare const withDumbCircleCtx: <WrappedProps extends {}>(Wrapped: import("react").ComponentType<WrappedProps & {
    service: CircleService;
}>) => (props: WrappedProps) => JSX.Element | null;
export { useCircleCtx } from './hooks';
export { CircleService };
