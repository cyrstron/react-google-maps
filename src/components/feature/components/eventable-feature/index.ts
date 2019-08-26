export {
  Polygon,
  DumbPolygon,
  withSmartPolygonCtx,
  withDumbPolygonCtx,
  PolygonService,
} from './components/polygon';
export {
  Polyline,
  DumbPolyline,
  withSmartPolylineCtx,
  withDumbPolylineCtx,
  PolylineService,
} from './components/polyline';
export {
  Marker,
  DumbMarker,
  withSmartMarkerCtx,
  withDumbMarkerCtx,
  MarkerService,
} from './components/marker';
export {
  FeatureCtxProvider,
  FeatureCtxConsumer,
  CreateFeatureCtxProvider,
  CreateFeatureCtxConsumer,
  withSmartFeatureCtx,
  withFullFeatureCtx,
  CreateServiceProps,
  CreateFeatureService,
  withDumbFeatureCtx,
  FeatureServiceProps,
  withCreateDumbFeatureCtx,
} from './hocs';

import { MapsObjectEventProps, MapsObjectEventName, MapsObjectHandlerName } from 'index';

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