import {MarkerProps} from './';
import {useSmartMarker} from './hooks';

const Marker = (props: MarkerProps): null => {
  useSmartMarker(props);

  return null;
};

export {Marker};
