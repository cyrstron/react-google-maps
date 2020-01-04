/// <reference types="googlemaps" />
export { EventableFeatureService } from '../eventable-feature-service/eventable-feature-service';
export { featureEventNames } from './event-names';
import { MapsObjectEventProps, MapsObjectEventName, MapsObjectHandlerName } from '../../../../services/maps-eventable-object/';
export declare type FeatureEventsProps = MapsObjectEventProps & {
    onMouseDown?: google.maps.MouseEvent;
    onMouseMove?: google.maps.MouseEvent;
    onMouseUp?: google.maps.MouseEvent;
};
export declare type FeatureEventName = MapsObjectEventName | 'mousedown' | 'mousemove' | 'mouseup';
export declare type FeatureHandlerName = MapsObjectHandlerName | 'onMouseDown' | 'onMouseMove' | 'onMouseUp';
export declare type FeatureEventNames = {
    [key in FeatureHandlerName]: FeatureEventName;
};
