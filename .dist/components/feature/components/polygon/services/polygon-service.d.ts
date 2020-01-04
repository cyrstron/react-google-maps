/// <reference types="googlemaps" />
import { MapService } from '../../../../map';
import { EventableFeatureService } from '../../../services/eventable-feature-service';
import { PolygonEventName, PolygonEventHandler, PolygonHandlerName } from '..';
export declare class PolygonService extends EventableFeatureService<google.maps.Polygon, PolygonEventName, google.maps.PolygonOptions, PolygonEventHandler, PolygonHandlerName> {
    constructor(google: Google, mapService: MapService, props: google.maps.PolygonOptions & {
        [key in PolygonHandlerName]?: PolygonEventHandler;
    });
}
