import { TilesOverlayService } from '../services';
import { TilePayload, ExtendPayloadCallback } from '../services/tiles-overlay-service';
export declare const useTilesOverlayState: <ExtendedPayload = any>(service: TilesOverlayService<ExtendedPayload> | undefined, props: google.custom.TilesOverlayOptions & {
    extendPayload?: ExtendPayloadCallback<ExtendedPayload> | undefined;
    watchProps?: any[] | undefined;
}) => [Map<Node, TilePayload & {
    data?: ExtendedPayload | undefined;
}>, (tiles: Map<Node, TilePayload & {
    data?: ExtendedPayload | undefined;
}>) => void];
