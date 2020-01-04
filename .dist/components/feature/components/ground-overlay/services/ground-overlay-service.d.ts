/// <reference types="googlemaps" />
import { MapService } from '../../../../map';
import { EventableFeatureService } from '../../../services/eventable-feature-service';
import { GroundOverlayEventName, GroundOverlayEventHandler, GroundOverlayHandlerName, GroundOverlayProps, GroundOverlaySettings } from '../';
export declare class GroundOverlayService extends EventableFeatureService<google.maps.GroundOverlay, GroundOverlayEventName, GroundOverlaySettings, GroundOverlayEventHandler, GroundOverlayHandlerName> {
    constructor(google: Google, mapService: MapService, { bounds, url, ...props }: GroundOverlayProps);
    setOptions(props: GroundOverlaySettings | undefined): void;
    setBounds(bounds: google.maps.LatLngBoundsLiteral): void;
    getBounds(): google.maps.LatLngBoundsLiteral;
    setUrl(url: string): void;
    getUrl(): string;
}
