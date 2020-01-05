import {RectangleProps} from '.';
import {useCreateRectangleCtx} from './hooks';

const DumbRectangle = (props: RectangleProps): null => {
  useCreateRectangleCtx(props);

  return null;
};

export {DumbRectangle};
