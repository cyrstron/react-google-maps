/// <reference types="googlemaps" />
import { GroundOverlayEventHandler, GroundOverlayHandlerName, GroundOverlaySettings } from '..';
export interface SortedGroundOverlayProps {
    options?: GroundOverlaySettings;
    handlers?: {
        [key in GroundOverlayHandlerName]: GroundOverlayEventHandler;
    };
}
export declare const groupGroundOverlayProps: ({ onClick, onDblClick, ...options }: {
    onClick?: google.maps.MapMouseEventHandler | undefined;
    onDblClick?: google.maps.MapMouseEventHandler | undefined;
} & google.maps.GroundOverlayOptions & {
    bounds: google.maps.LatLngBoundsLiteral;
    url: string;
}) => SortedGroundOverlayProps;