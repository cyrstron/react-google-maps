import {ReactNode} from 'react';
import {createPortal} from 'react-dom';
import { DomOverlayService } from '../services';

export interface OverlayProps {
  children?: ReactNode;
  service?: DomOverlayService;
}

export const Overlay = ({children, service}: OverlayProps) => {
  if (!service) return null;

  const container = service.getContainer();

  if (!container) return null;

  return createPortal(children || null, container);
}