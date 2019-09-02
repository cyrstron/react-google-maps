import {filterObject} from '../../../../../services/maps-object';
import { 
  GroundOverlayEventHandler, 
  GroundOverlayHandlerName
} from '..';

export interface SortedGroundOverlayProps {
  options?: google.maps.GroundOverlayOptions;
  handlers?: {[key in GroundOverlayHandlerName]: GroundOverlayEventHandler};
}

export const groupGroundOverlayProps = ({
  onClick,
  onDblClick,
  ...options
}: {[key in GroundOverlayHandlerName]?: GroundOverlayEventHandler} & google.maps.GroundOverlayOptions): SortedGroundOverlayProps => {
  const result: SortedGroundOverlayProps = {
    options,
  };

  const handlers = filterObject<GroundOverlayEventHandler>({
    onClick,
    onDblClick,
  });

  if (handlers) {
    result.handlers = handlers as {
      [key in GroundOverlayHandlerName]: GroundOverlayEventHandler
    };
  }

  return result;
};
