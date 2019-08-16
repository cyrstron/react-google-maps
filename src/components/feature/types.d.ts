import {
	 MapsObjectHandlerName, 
	 MapsObjectEventName, 
	 MapsObjectEventProps 
} from "../../";

export type FeatureEventsProps =  MapsObjectEventProps & {
	onMouseDown?: google.maps.MouseEvent,
	onMouseMove?: google.maps.MouseEvent,
	onMouseUp?: google.maps.MouseEvent,    
}
  
export type FeatureEventName = MapsObjectEventName | 
	'mousedown' |
	'mousemove'	|
	'mouseup';
	
export type FeatureHandlerName = MapsObjectHandlerName |
	'onMouseDown' |
	'onMouseMove' | 
	'onMouseUp';

export type FeatureEventNames = {
	[key in FeatureHandlerName]: FeatureEventName;
}