import {PolygonProps} from './';
import {useCreatePolygonCtx} from './hooks';

const DumbPolygon = (props: PolygonProps): null => {
  useCreatePolygonCtx(props);

  return null;
};

export {DumbPolygon};
