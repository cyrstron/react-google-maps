import {filterObject} from '../../../../../services';
import { 
  PolylineHandlerName, 
  PolylineEventHandler, 
  PolylineEventsProps 
} from '../';

export interface SortedPolylineProps {
  options?: google.maps.PolylineOptions;
  handlers?: {[key in PolylineHandlerName]: PolylineEventHandler};
}

export const groupPolylineProps = ({
  onClick,
  onDblClick,
  onDrag,
  onDragEnd,
  onDragStart,
  onMouseOut,
  onMouseOver,
  onRightClick,
  onMouseDown,
  onMouseMove,
  onMouseUp,
  ...options
}: PolylineEventsProps & google.maps.PolylineOptions): SortedPolylineProps => {
  const result: SortedPolylineProps = {
    options,
  };

  const handlers = filterObject<PolylineEventHandler>({
    onClick,
    onDblClick,
    onDrag,
    onDragEnd,
    onDragStart,
    onMouseDown,
    onMouseOut,
    onMouseOver,
    onMouseUp,
    onRightClick,
  });

  if (handlers) {
    result.handlers = handlers as {[key in PolylineHandlerName]: PolylineEventHandler};
  }

  return result;
};