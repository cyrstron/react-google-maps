import { ReactNode, ReactPortal } from 'react';
import { DomOverlayService } from '../services';
export interface OverlayProps {
    children?: ReactNode;
    service?: DomOverlayService;
}
declare const Overlay: ({ children, service }: OverlayProps) => ReactPortal | null;
export { Overlay };
