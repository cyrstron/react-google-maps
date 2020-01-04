import { MapService } from '../../../map';
import { MapsEventableObjectService } from '../../../../services/maps-eventable-object';
export declare abstract class EventableFeatureService<Feature extends google.maps.Feature<EventName, Options, EventHandler>, EventName, Options, EventHandler, EventHandlerName extends string> extends MapsEventableObjectService<Feature, EventName, Options, EventHandler, EventHandlerName> {
    mapService: MapService;
    constructor(google: Google, mapService: MapService, object: Feature, props: {
        options?: Options;
        handlers?: {
            [key in EventHandlerName]: EventHandler;
        };
    }, eventNames: {
        [key in EventHandlerName]: EventName;
    }, groupProps: (props: Options & {
        [key in EventHandlerName]?: EventHandler;
    }) => {
        handlers?: {
            [key in EventHandlerName]: EventHandler;
        };
        options?: Options;
    });
    unmount(): void;
    hide(): void;
    show(): void;
}
