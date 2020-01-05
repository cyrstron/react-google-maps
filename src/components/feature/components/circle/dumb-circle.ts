import {CircleProps} from '.';
import {useCreateCircleCtx} from './hooks';

const DumbCircle = (props: CircleProps): null => {
  useCreateCircleCtx(props);

  return null;
};

export {DumbCircle};
