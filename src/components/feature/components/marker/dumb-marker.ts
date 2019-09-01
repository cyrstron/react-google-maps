import { MarkerProps} from './';
import { useCreateMarkerCtx } from './hooks';

export const DumbMarker = (props: MarkerProps) => {
  useCreateMarkerCtx(props);

  return null;
}
