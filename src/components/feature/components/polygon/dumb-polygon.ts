import { PolygonProps} from './';
import { useCreatePolygonCtx } from './hooks';

export const DumbPolygon = (props: PolygonProps) => {
  useCreatePolygonCtx(props);

  return null;
}
