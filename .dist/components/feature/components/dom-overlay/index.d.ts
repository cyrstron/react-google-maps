import { ReactNode } from 'react';
import { DomOverlayService } from './services';
export declare type DomOverlayProps = google.custom.DomOverlayOptions & {
    children?: ReactNode;
};
export { DomOverlay } from './dom-overlay';
export { DumbDomOverlay } from './dumb-dom-overlay';
export declare const withSmartDomOverlayCtx: <WrappedProps extends {}>(Wrapped: import("react").ComponentType<WrappedProps>) => (props: WrappedProps) => JSX.Element;
export declare const withDumbDomOverlayCtx: <WrappedProps extends {}>(Wrapped: import("react").ComponentType<WrappedProps & {
    service: DomOverlayService;
}>) => (props: WrappedProps) => JSX.Element | null;
export { useDomOverlayCtx } from './hooks';
export { DomOverlayService };
