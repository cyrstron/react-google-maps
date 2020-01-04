/// <reference types="googlemaps" />
import { MapService } from '../../../../map';
import { EventableFeatureService } from '../../../services/eventable-feature-service';
import { RectangleEventName, RectangleEventHandler, RectangleHandlerName } from '..';
export declare class RectangleService extends EventableFeatureService<google.maps.Rectangle, RectangleEventName, google.maps.RectangleOptions, RectangleEventHandler, RectangleHandlerName> {
    constructor(google: Google, mapService: MapService, props: google.maps.RectangleOptions & {
        [key in RectangleHandlerName]?: RectangleEventHandler;
    });
}
