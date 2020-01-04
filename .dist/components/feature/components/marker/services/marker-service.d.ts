/// <reference types="googlemaps" />
import { MapService } from '../../../../map';
import { EventableFeatureService } from '../../../services/eventable-feature-service';
import { MarkerEventName, MarkerEventHandler, MarkerHandlerName } from '..';
export declare class MarkerService extends EventableFeatureService<google.maps.Marker, MarkerEventName, google.maps.MarkerOptions, MarkerEventHandler, MarkerHandlerName> {
    constructor(google: Google, mapService: MapService, props: google.maps.MarkerOptions & {
        [key in MarkerHandlerName]?: MarkerEventHandler;
    });
}
