/// <reference types="googlemaps" />
import { InfoWindowEventHandler, InfoWindowHandlerName, InfoWindowSettings } from '..';
export interface SortedInfoWindowProps {
    options?: InfoWindowSettings;
    handlers?: {
        [key in InfoWindowHandlerName]: InfoWindowEventHandler;
    };
}
export declare const groupInfoWindowProps: ({ onCloseClick, onContentChanged, onDomReady, onPositionChanged, onZIndexChanged, ...options }: google.maps.InfoWindowOptions & {
    content: undefined;
    open: boolean;
    anchor: import("../..").MarkerService;
} & {
    onPositionChanged?: google.maps.MapMouseEventHandler | undefined;
    onZIndexChanged?: google.maps.MapMouseEventHandler | undefined;
    onCloseClick?: google.maps.MapMouseEventHandler | undefined;
    onContentChanged?: google.maps.MapMouseEventHandler | undefined;
    onDomReady?: google.maps.MapMouseEventHandler | undefined;
}) => SortedInfoWindowProps;
