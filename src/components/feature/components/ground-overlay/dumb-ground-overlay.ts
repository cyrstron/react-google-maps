import { GroundOverlayProps} from '.';
import { useCreateGroundOverlayCtx } from './hooks';

export const DumbGroundOverlay = (props: GroundOverlayProps) => {
  useCreateGroundOverlayCtx(props);

  return null;
}
