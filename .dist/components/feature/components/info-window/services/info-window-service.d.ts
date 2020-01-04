/// <reference types="googlemaps" />
import { MapService } from '../../../../map';
import { InfoWindowEventName, InfoWindowEventHandler, InfoWindowHandlerName, InfoWindowProps, InfoWindowSettings } from '..';
import { MapsEventableObjectService } from '../../../../../services/maps-eventable-object';
import { MarkerService } from '../../marker';
export declare class InfoWindowService extends MapsEventableObjectService<google.maps.InfoWindow, InfoWindowEventName, InfoWindowSettings, InfoWindowEventHandler, InfoWindowHandlerName> {
    mapService: MapService;
    markerService: MarkerService;
    constructor(google: Google, mapService: MapService, { anchor, open, ...props }: InfoWindowProps);
    unmount(): void;
    hide(): void;
    show(): void;
    setOptions(props: InfoWindowSettings | undefined): void;
    setOpen(isOpen: boolean): void;
    getContainer(): Element;
}
