import {filterObject} from '../../../../../services/maps-object';
import {
  PolygonEventHandler,
  PolygonHandlerName,
} from '..';

export interface SortedPolygonProps {
  options?: google.maps.PolygonOptions;
  handlers?: {[key in PolygonHandlerName]: PolygonEventHandler};
}

export const groupPolygonProps = ({
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
}: google.maps.PolygonOptions & {
  [key in PolygonHandlerName]?: PolygonEventHandler
}): SortedPolygonProps => {
  const result: SortedPolygonProps = {
    options,
  };

  const handlers = filterObject<PolygonEventHandler>({
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
  });

  if (handlers) {
    result.handlers = handlers as {[key in PolygonHandlerName]: PolygonEventHandler};
  }

  return result;
};
