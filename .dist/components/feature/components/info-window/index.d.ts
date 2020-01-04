/// <reference types="googlemaps" />
/// <reference types="react" />
import { InfoWindowService } from './services';
import { MarkerService } from '../marker';
export declare type InfoWindowEventHandler = google.maps.MapMouseEventHandler;
export declare type InfoWindowSettings = google.maps.InfoWindowOptions & {
    content: undefined;
    open: boolean;
    anchor: MarkerService;
};
export declare type InfoWindowProps = InfoWindowSettings & {
    [key in InfoWindowHandlerName]?: InfoWindowEventHandler;
};
export declare type InfoWindowEventName = 'closeclick' | 'content_changed' | 'domready' | 'position_changed' | 'zindex_changed';
export declare type InfoWindowHandlerName = 'onCloseClick' | 'onContentChanged' | 'onDomReady' | 'onPositionChanged' | 'onZIndexChanged';
export declare type InfoWindowEventNames = {
    [key in InfoWindowHandlerName]: InfoWindowEventName;
};
export { InfoWindow } from './info-window';
export { DumbInfoWindow } from './dumb-info-window';
export declare const withSmartInfoWindowCtx: <WrappedProps extends {}>(Wrapped: import("react").ComponentType<WrappedProps>) => (props: WrappedProps) => JSX.Element;
export declare const withDumbInfoWindowCtx: <WrappedProps extends {}>(Wrapped: import("react").ComponentType<WrappedProps & {
    service: InfoWindowService;
}>) => (props: WrappedProps) => JSX.Element | null;
export { useInfoWindowCtx } from './hooks';
export { InfoWindowService };
