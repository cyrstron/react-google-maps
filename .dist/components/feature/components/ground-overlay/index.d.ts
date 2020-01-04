/// <reference types="googlemaps" />
/// <reference types="react" />
import { GroundOverlayService } from './services';
export declare type GroundOverlayEventHandler = google.maps.MapMouseEventHandler;
export declare type GroundOverlaySettings = google.maps.GroundOverlayOptions & {
    bounds: google.maps.LatLngBoundsLiteral;
    url: string;
};
export declare type GroundOverlayProps = GroundOverlaySettings & {
    [key in GroundOverlayHandlerName]?: GroundOverlayEventHandler;
};
export declare type GroundOverlayEventName = 'click' | 'dblclick';
export declare type GroundOverlayHandlerName = 'onClick' | 'onDblClick';
export declare type GroundOverlayEventNames = {
    [key in GroundOverlayHandlerName]: GroundOverlayEventName;
};
export { GroundOverlay } from './ground-overlay';
export { DumbGroundOverlay } from './dumb-ground-overlay';
export declare const withSmartGroundOverlayCtx: <WrappedProps extends {}>(Wrapped: import("react").ComponentType<WrappedProps>) => (props: WrappedProps) => JSX.Element;
export declare const withDumbGroundOverlayCtx: <WrappedProps extends {}>(Wrapped: import("react").ComponentType<WrappedProps & {
    service: GroundOverlayService;
}>) => (props: WrappedProps) => JSX.Element | null;
export { useGroundOverlayCtx } from './hooks';
export { GroundOverlayService };
