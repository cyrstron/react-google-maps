import {PolygonProps} from './';
import {useSmartPolygon} from './hooks';

const Polygon = (props: PolygonProps): null => {
  useSmartPolygon(props);

  return null;
};

export {Polygon};
