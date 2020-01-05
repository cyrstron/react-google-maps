import {GroundOverlayProps} from '.';
import {useCreateGroundOverlayCtx} from './hooks';

const DumbGroundOverlay = (props: GroundOverlayProps): null => {
  useCreateGroundOverlayCtx(props);

  return null;
};

export {DumbGroundOverlay};
