/// <reference types="googlemaps" />
import { InfoWindowEventHandler, InfoWindowHandlerName, InfoWindowSettings } from '..';
export interface SortedInfoWindowProps {
    options?: InfoWindowSettings;
    handlers?: {
        [key in InfoWindowHandlerName]: InfoWindowEventHandler;
    };
}
export declare const groupInfoWindowProps: ({ onCloseClick, onContentChanged, onDomReady, onPositionChanged, onZIndexChanged, ...options }: {
    onCloseClick?: google.maps.MapMouseEventHandler | undefined;
    onContentChanged?: google.maps.MapMouseEventHandler | undefined;
    onDomReady?: google.maps.MapMouseEventHandler | undefined;
    onPositionChanged?: google.maps.MapMouseEventHandler | undefined;
    onZIndexChanged?: google.maps.MapMouseEventHandler | undefined;
} & google.maps.InfoWindowOptions & {
    content: undefined;
    open: boolean;
    anchor: import("../..").MarkerService;
}) => SortedInfoWindowProps;
