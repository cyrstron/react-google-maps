import {filterObject} from '../../../../../services/maps-object';
import {
  GroundOverlayEventHandler,
  GroundOverlayHandlerName,
  GroundOverlaySettings,
} from '..';

export interface SortedGroundOverlayProps {
  options?: GroundOverlaySettings;
  handlers?: {[key in GroundOverlayHandlerName]: GroundOverlayEventHandler};
}

export const groupGroundOverlayProps = ({
  onClick,
  onDblClick,
  ...options
}: GroundOverlaySettings & {
  [key in GroundOverlayHandlerName]?: GroundOverlayEventHandler
}): SortedGroundOverlayProps => {
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
