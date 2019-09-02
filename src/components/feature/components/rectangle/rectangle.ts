import { RectangleProps} from '.';
import { useSmartRectangle } from './hooks';

export const Rectangle = (props: RectangleProps) => {
  useSmartRectangle(props);

  return null;
}
