/// <reference types="googlemaps" />
import { MapService } from '../../../../map';
import { EventableFeatureService } from '../../../services/eventable-feature-service';
import { PolylineEventName, PolylineEventHandler, PolylineHandlerName } from '..';
export declare class PolylineService extends EventableFeatureService<google.maps.Polyline, PolylineEventName, google.maps.PolylineOptions, PolylineEventHandler, PolylineHandlerName> {
    constructor(google: Google, mapService: MapService, props: google.maps.PolylineOptions & {
        [key in PolylineHandlerName]?: PolylineEventHandler;
    });
}
