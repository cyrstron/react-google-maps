import { PolylineProps} from './';
import {useSmartPolyline } from './hooks';

export const Polyline = (props: PolylineProps) => {
  useSmartPolyline(props);

  return null;
}
