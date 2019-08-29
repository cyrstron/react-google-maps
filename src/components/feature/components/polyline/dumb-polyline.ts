import { PolylineProps} from './';
import { useCreatePolylineCtx } from './hooks';

export const DumbPolyline = (props: PolylineProps) => {
  useCreatePolylineCtx(props);

  return null;
}
