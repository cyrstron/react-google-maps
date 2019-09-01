import { MarkerProps} from './';
import { useSmartMarker } from './hooks';

export const Marker = (props: MarkerProps) => {
  useSmartMarker(props);

  return null;
}
