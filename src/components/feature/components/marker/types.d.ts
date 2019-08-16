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