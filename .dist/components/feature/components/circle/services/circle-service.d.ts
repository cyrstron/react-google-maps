/// <reference types="googlemaps" />
import { MapService } from '../../../../map';
import { EventableFeatureService } from '../../../services/eventable-feature-service';
import { CircleEventName, CircleEventHandler, CircleHandlerName } from '../';
export declare class CircleService extends EventableFeatureService<google.maps.Circle, CircleEventName, google.maps.CircleOptions, CircleEventHandler, CircleHandlerName> {
    constructor(google: Google, mapService: MapService, props: google.maps.CircleOptions & {
        [key in CircleHandlerName]?: CircleEventHandler;
    });
}
