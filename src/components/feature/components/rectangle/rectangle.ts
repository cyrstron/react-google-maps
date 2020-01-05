import {RectangleProps} from '.';
import {useSmartRectangle} from './hooks';

const Rectangle = (props: RectangleProps): null => {
  useSmartRectangle(props);

  return null;
};

export {Rectangle};
