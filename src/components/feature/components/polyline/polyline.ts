import {PolylineProps} from './';
import {useSmartPolyline} from './hooks';

const Polyline = (props: PolylineProps): null => {
  useSmartPolyline(props);

  return null;
};

export {Polyline};
