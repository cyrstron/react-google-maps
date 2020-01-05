import {CircleProps} from '.';
import {useSmartCircle} from './hooks';

const Circle = (props: CircleProps): null => {
  useSmartCircle(props);

  return null;
};

export {Circle};
