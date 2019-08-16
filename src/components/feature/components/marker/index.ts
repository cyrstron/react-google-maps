import {
  Marker as MarkerWrapped,
} from './marker';

import {MarkerService} from './services';
import { 
  withDumbFeatureCtx, 
  FeatureServiceProps,
  withCreateDumbFeatureCtx,
  withSmartFeatureCtx,
  withFullFeatureCtx,
} from '../../hocs';

export const Marker = withFullFeatureCtx<
  MarkerEventName,
  google.maps.MarkerOptions,
  MarkerEventHandler,
  MarkerEventsProps,
  google.maps.Marker,
  MarkerService
>(MarkerService)<MarkerProps>(MarkerWrapped);
export const DumbMarker = withCreateDumbFeatureCtx<
  MarkerEventName,
  google.maps.MarkerOptions,
  MarkerEventHandler,
  MarkerEventsProps,
  google.maps.Marker,
  MarkerService,
  MarkerProps
>(MarkerWrapped);
export const withSmartMarkerCtx = withSmartFeatureCtx<
  MarkerEventName,
  google.maps.MarkerOptions,
  MarkerEventHandler,
  MarkerEventsProps,
  google.maps.Marker,
  MarkerService
>(MarkerService);
export const withDumbMarkerCtx = <Props extends {}>(
  Wrapped: React.ComponentType<Props & FeatureServiceProps<MarkerService>>,
) => (
  withDumbFeatureCtx<
    MarkerEventName,
    google.maps.MarkerOptions,
    MarkerEventHandler,
    google.maps.Marker,
    MarkerService,
    Props
  >(Wrapped)
);

export {
  MarkerService,
};
import { FeatureEventsProps, FeatureEventName, FeatureHandlerName } from "../../types.d";

export type MarkerEventHandler = google.maps.MapEventHandler | 
  google.maps.MapMouseEventHandler;

export type MarkerEventsProps = FeatureEventsProps & {
  onAnimationChanged?: google.maps.MapEventHandler;
  onClickableChanged?: google.maps.MapEventHandler;
  onCursorChanged?: google.maps.MapEventHandler;
  onDraggableChanged?: google.maps.MapEventHandler;
  onFlatChanged?: google.maps.MapEventHandler;
  onIconChanged?: google.maps.MapEventHandler;
  onMouseDown?: google.maps.MapEventHandler;
  onMouseUp?: google.maps.MapEventHandler;
  onPositionChanged?: google.maps.MapEventHandler;
  onShapeChanged?: google.maps.MapEventHandler;
  onTitleChanged?: google.maps.MapEventHandler;
  onVisibleChanged?: google.maps.MapEventHandler;
  onZIndexChanged?: google.maps.MapEventHandler;
}

export type MarkerProps = google.maps.MarkerOptions & 
  MarkerEventsProps & {
    position: google.maps.LatLngLiteral;
    title: string;
  };

export type MarkerEventName = FeatureEventName |
  'animation_changed' | 
  'clickable_changed' | 
  'cursor_changed' | 
  'draggable_changed' | 
  'flat_changed' | 
  'icon_changed' | 
  'mousedown' | 
  'mouseup' | 
  'position_changed' | 
  'shape_changed' | 
  'title_changed' | 
  'visible_changed' | 
  'zindex_changed';
  
export type MarkerHandlerName = FeatureHandlerName |
  'onAnimationChanged' | 
  'onClickableChanged' | 
  'onCursorChanged' | 
  'onDraggableChanged' | 
  'onFlatChanged' | 
  'onIconChanged' | 
  'onMouseDown' | 
  'onMouseUp' | 
  'onPositionChanged' | 
  'onShapeChanged' | 
  'onTitleChanged' | 
  'onVisibleChanged' | 
  'onZIndexChanged';

export type MarkerEventNames = {
  [key in MarkerHandlerName]: MarkerEventName;
}