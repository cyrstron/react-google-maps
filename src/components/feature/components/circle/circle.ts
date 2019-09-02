import { CircleProps} from '.';
import { useSmartCircle } from './hooks';

export const Circle = (props: CircleProps) => {
  useSmartCircle(props);

  return null;
}
