import { ReactNode } from 'react';
import { DomOverlayService } from '../services';
export interface OverlayProps {
    children?: ReactNode;
    service?: DomOverlayService;
}
declare const Overlay: ({ children, service }: OverlayProps) => import("react").ReactPortal | null;
export { Overlay };
