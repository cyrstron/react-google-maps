import { PolygonProps} from './';
import { useSmartPolygon } from './hooks';

export const Polygon = (props: PolygonProps) => {
  useSmartPolygon(props);

  return null;
}
