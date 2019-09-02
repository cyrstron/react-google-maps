import { RectangleProps} from '.';
import { useCreateRectangleCtx } from './hooks';

export const DumbRectangle = (props: RectangleProps) => {
  useCreateRectangleCtx(props);

  return null;
}
