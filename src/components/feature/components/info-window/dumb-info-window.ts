import {useDumbInfoWindow} from './hooks';
import {createPortal} from 'react-dom';
import {FullInfoWindowProps} from './info-window';
import {ReactPortal} from 'react';

const DumbInfoWindow = ({children, ...props}: FullInfoWindowProps): ReactPortal | null => {
  const service = useDumbInfoWindow(props);

  if (!service) return null;

  const container = service.getContainer();

  return createPortal(children, container);
};

export {DumbInfoWindow};
