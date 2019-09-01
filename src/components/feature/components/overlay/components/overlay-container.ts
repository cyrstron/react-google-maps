import {ReactNode} from 'react';
import {createPortal} from 'react-dom';
import { OverlayService } from '../services';

export interface OverlayContainerProps {
  children?: ReactNode;
  service?: OverlayService;
}

export const OverlayContainer = ({children, service}: OverlayContainerProps) => {
  if (!service) return null;

  const container = service.getContainer();

  if (!container) return null;

  return createPortal(children || null, container);
}