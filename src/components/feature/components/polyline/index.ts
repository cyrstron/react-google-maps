import {Polyline as PolylineWrapped} from './polyline';
import {PolylineService} from './services';
import { 
  withDumbFeatureCtx, 
  FeatureServiceProps,
  withCreateDumbFeatureCtx,
  withSmartFeatureCtx,
  withFullFeatureCtx,
} from '../../hocs';

export const Polyline = withFullFeatureCtx<
  PolylineEventName,
  google.maps.PolylineOptions,
  PolylineEventHandler,
  PolylineEventsProps,
  google.maps.Polyline,
  PolylineService
>(PolylineService)<PolylineProps>(PolylineWrapped);

export const DumbPolyline = withCreateDumbFeatureCtx<
  PolylineEventName,
  google.maps.PolylineOptions,
  PolylineEventHandler,
  PolylineEventsProps,
  google.maps.Polyline,
  PolylineService,
  PolylineProps
>(PolylineWrapped);

export const withSmartPolylineCtx = withSmartFeatureCtx<
  PolylineEventName,
  google.maps.PolylineOptions,
  PolylineEventHandler,
  PolylineEventsProps,
  google.maps.Polyline,
  PolylineService
>(PolylineService);

export const withDumbPolylineCtx = <Props extends {}>(
  Wrapped: React.ComponentType<Props & FeatureServiceProps<PolylineService>>,
) => (
  withDumbFeatureCtx<
    PolylineEventName,
    google.maps.PolylineOptions,
    PolylineEventHandler,
    google.maps.Polyline,
    PolylineService,
    Props
  >(Wrapped)
);

export {
  PolylineService,
};
import { FeatureEventsProps, FeatureEventName, FeatureHandlerName } from "../../types.d";

export type PolylineEventsProps = FeatureEventsProps & {
	onMouseDown?: google.maps.MapPolyEventHandler,
	onMouseMove?: google.maps.MapPolyEventHandler,
	onMouseUp?: google.maps.MapPolyEventHandler,    
	onClick?: google.maps.MapPolyEventHandler,
	onDblClick?: google.maps.MapPolyEventHandler,
	onMouseOut?: google.maps.MapPolyEventHandler,
	onMouseOver?: google.maps.MapPolyEventHandler,
	onRightClick?: google.maps.MapPolyEventHandler,
}
  
export type PolylineEventHandler = google.maps.MapMouseEventHandler |
	google.maps.MapPolyEventHandler;

export type PolylineProps = google.maps.PolylineOptions & 
	PolylineEventsProps & {
		path: google.maps.LatLngLiteral[]
	};
  
export type PolylineEventName = FeatureEventName |  
	'mousedown' |
	'mousemove'	|
	'mouseup';
	
export type PolylineHandlerName = FeatureHandlerName |
	'onMouseDown' |
	'onMouseMove' | 
	'onMouseUp';

export type PolylineEventNames = {
	[key in PolylineHandlerName]: PolylineEventName;
};