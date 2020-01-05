import {PolylineProps} from './';
import {useCreatePolylineCtx} from './hooks';

const DumbPolyline = (props: PolylineProps): null => {
  useCreatePolylineCtx(props);

  return null;
};

export {DumbPolyline};
