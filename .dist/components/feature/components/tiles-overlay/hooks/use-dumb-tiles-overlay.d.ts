import { TilesOverlayService, CreateTilesOverlayServiceProps } from "../services";
import { TilePayload, ExtendPayloadCallback } from "../services/tiles-overlay-service";
export declare const useCreateTilesOverlayCtx: (props: CreateTilesOverlayServiceProps<any>) => void;
export declare const useTilesOverlayCtx: () => TilesOverlayService<any> | undefined;
export declare const useDumbTilesOverlay: <ExtendedPayload = any>(props: google.custom.TilesOverlayOptions & {
    extendPayload?: ExtendPayloadCallback<ExtendedPayload> | undefined;
    watchProps?: any[] | undefined;
}) => Map<Node, TilePayload & {
    data?: ExtendedPayload | undefined;
}>;
