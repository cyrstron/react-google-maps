import { withSmartFeatureCtx, withDumbFeatureCtx } from 'components/feature/hocs';
import { FeatureEventName, FeatureHandlerName } from "../../services/eventable-feature-service";
import {PolygonService, createPolygonService} from './services';

export type PolygonEventHandler = google.maps.MapMouseEventHandler |
	google.maps.MapPolyEventHandler;

export type PolygonProps = google.maps.PolygonOptions & 
	{[key in PolygonHandlerName]?: PolygonEventHandler} & {
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

export {Polygon} from './polygon';
export {DumbPolygon} from './dumb-polygon';

export const withSmartPolylineCtx = withSmartFeatureCtx<
  PolygonProps,
  PolygonService
>(createPolygonService);

export const withDumbPolylineCtx = withDumbFeatureCtx<PolygonProps, PolygonService>();

export {usePolygonCtx} from './hooks';

export {PolygonService};