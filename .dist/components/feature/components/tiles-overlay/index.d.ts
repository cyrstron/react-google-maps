/// <reference types="googlemaps" />
import { ReactNode, ComponentType } from 'react';
import { TilePayload } from './services/tiles-overlay-service';
import { TilesOverlayService } from './services';
export declare type TilesOverlayProps = google.custom.TilesOverlayOptions & {
    children?: (props: {
        tileCoord: google.maps.Point;
        zoom: number;
        width: number;
        height: number;
        data?: any;
    }) => ReactNode | null;
    TileComponent?: ComponentType<{
        tileCoord: google.maps.Point;
        zoom: number;
        width: number;
        height: number;
        data?: any;
    }>;
    extendPayload?: (payload: TilePayload & {
        width: number;
        height: number;
    }) => Promise<any>;
    width: number;
    height?: number;
    watchProps?: any[];
};
export { TilesOverlay } from './tiles-overlay';
export { DumbTilesOverlay } from './dumb-tiles-overlay';
export declare const withSmartTilesOverlayCtx: <WrappedProps extends {}>(Wrapped: ComponentType<WrappedProps>) => (props: WrappedProps) => JSX.Element;
export declare const withDumbTilesOverlayCtx: <WrappedProps extends {}>(Wrapped: ComponentType<WrappedProps & {
    service: TilesOverlayService<any>;
}>) => (props: WrappedProps) => JSX.Element | null;
export { useTilesOverlayCtx } from './hooks';
export { TilesOverlayService };
