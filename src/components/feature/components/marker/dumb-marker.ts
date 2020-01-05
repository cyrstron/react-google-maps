import {MarkerProps} from './';
import {useCreateMarkerCtx} from './hooks';

const DumbMarker = (props: MarkerProps): null => {
  useCreateMarkerCtx(props);

  return null;
};

export {DumbMarker};
