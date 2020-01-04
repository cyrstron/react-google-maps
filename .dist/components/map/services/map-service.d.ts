/// <reference types="googlemaps" />
import { MapEventName, MapEventsProps, MapEventHandler, MapHandlerName } from '../';
import { MapsEventableObjectService } from '../../../services/maps-eventable-object';
export declare class MapService extends MapsEventableObjectService<google.maps.Map, MapEventName, google.maps.MapOptions, MapEventHandler, MapHandlerName> {
    constructor(googleApi: Google, container: HTMLDivElement, props: google.maps.MapOptions & MapEventsProps);
    setCenter(center: google.maps.LatLngLiteral): void;
    panTo(center: google.maps.LatLngLiteral): void;
    setZoom(zoom: number): void;
    setBounds(bounds: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral | google.maps.LatLngLiteral[]): void;
    panToBounds(bounds: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral | google.maps.LatLngLiteral[]): void;
    getBounds(): google.maps.LatLngBoundsLiteral | undefined;
    getZoom(): number;
    getCenter(): google.maps.LatLngLiteral;
    setOptions({ bounds, ...options }: google.maps.MapOptions & {
        bounds?: google.maps.LatLngBoundsLiteral | google.maps.LatLngLiteral[];
    }): void;
    insertMapType(index: number, overlay: google.maps.MapType): void;
    private convertToLatLngBounds;
}
