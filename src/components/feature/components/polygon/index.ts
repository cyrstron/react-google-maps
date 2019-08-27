import {Polygon as PolygonWrapped} from './polygon';
import {PolygonService} from './services';
import { 
  withDumbFeatureCtx, 
  FeatureServiceProps,
  withCreateDumbFeatureCtx,
  withSmartFeatureCtx,
  withFullFeatureCtx,
} from '../eventable-feature/hocs';

export const Polygon = withFullFeatureCtx<
  PolygonEventName,
  google.maps.PolygonOptions,
  PolygonEventHandler,
  PolygonEventsProps,
  google.maps.Polygon,
  PolygonService
>(PolygonService)<PolygonProps>(PolygonWrapped);

export const DumbPolygon = withCreateDumbFeatureCtx<
  PolygonEventName,
  google.maps.PolygonOptions,
  PolygonEventHandler,
  PolygonEventsProps,
  google.maps.Polygon,
  PolygonService,
  PolygonProps
>(PolygonWrapped);

export const withSmartPolygonCtx = withSmartFeatureCtx<
  PolygonEventName,
  google.maps.PolygonOptions,
  PolygonEventHandler,
  PolygonEventsProps,
  google.maps.Polygon,
  PolygonService
>(PolygonService);

export const withDumbPolygonCtx = <Props extends {}>(
  Wrapped: React.ComponentType<Props & FeatureServiceProps<PolygonService>>,
) => (
  withDumbFeatureCtx<
    PolygonEventName,
    google.maps.PolygonOptions,
    PolygonEventHandler,
    google.maps.Polygon,
    PolygonService,
    Props
  >(Wrapped)
);

export {
  PolygonService,
};

import { FeatureEventName, FeatureHandlerName } from "../eventable-feature";
  
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