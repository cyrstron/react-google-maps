import { TilesOverlayService, CreateTilesOverlayServiceProps } from '../services';
import { TilePayload, ExtendPayloadCallback } from '../services/tiles-overlay-service';
export declare const useTilesOverlay: () => [TilesOverlayService<any> | undefined, (props: CreateTilesOverlayServiceProps<any>) => void];
export declare const useUpdateTilesOverlay: (props: CreateTilesOverlayServiceProps<any>, setProps?: ((props: CreateTilesOverlayServiceProps<any>) => void) | undefined) => void;
export declare const useSmartTilesOverlay: <ExtendedPayload = any>(props: google.custom.TilesOverlayOptions & {
    extendPayload?: ExtendPayloadCallback<ExtendedPayload> | undefined;
    watchProps?: any[] | undefined;
}) => Map<Node, TilePayload & {
    data?: ExtendedPayload | undefined;
}>;
