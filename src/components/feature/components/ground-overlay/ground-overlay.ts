import {GroundOverlayProps} from '.';
import {useSmartGroundOverlay} from './hooks';

const GroundOverlay = (props: GroundOverlayProps): null => {
  useSmartGroundOverlay(props);

  return null;
};

export {GroundOverlay};
