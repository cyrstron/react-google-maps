import { FeatureEventsProps, FeatureEventName, FeatureHandlerName } from "../../types.d";

export type PolygonEventsProps = FeatureEventsProps & {
	onMouseDown?: google.maps.MapPolyEventHandler,
	onMouseMove?: google.maps.MapPolyEventHandler,
	onMouseUp?: google.maps.MapPolyEventHandler,    
	onClick?: google.maps.MapPolyEventHandler,
	onDblClick?: google.maps.MapPolyEventHandler,
	onMouseOut?: google.maps.MapPolyEventHandler,
	onMouseOver?: google.maps.MapPolyEventHandler,
	onRightClick?: google.maps.MapPolyEventHandler,
}
  
export type PolygonEventHandler = google.maps.MapMouseEventHandler |
	google.maps.MapPolyEventHandler;

export type PolygonProps = google.maps.PolygonOptions & 
	PolygonEventsProps & {
		paths: google.maps.LatLngLiteral[] | google.maps.LatLngLiteral[][]
	};
  
export type PolygonEventName = FeatureEventName |  
	'mousedown' |
	'mousemove'	|
	'mouseup';
	
export type PolygonHandlerName = FeatureHandlerName |
	'onMouseDown' |
	'onMouseMove' | 
	'onMouseUp';

export type PolygonEventNames = {
	[key in PolygonHandlerName]: PolygonEventName;
};