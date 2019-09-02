import { CircleProps} from '.';
import { useCreateCircleCtx } from './hooks';

export const DumbCircle = (props: CircleProps) => {
  useCreateCircleCtx(props);

  return null;
}
