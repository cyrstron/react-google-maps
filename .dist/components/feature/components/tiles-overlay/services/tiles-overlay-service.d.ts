/// <reference types="googlemaps" />
/// <reference types="lodash" />
import { MapService } from '../../../../map/services';
import { EventlessFeatureService } from '../../../services/eventless-feature-service/eventless-feature-service';
import { CreateTilesOverlayServiceProps } from './create-tiles-overlay-service';
export interface TilePayload {
    tileCoord: google.maps.Point;
    zoom: number;
}
export declare type ExtendPayloadCallback<ExtendedPayload = any> = (payload: TilePayload & {
    width: number;
    height: number;
}) => Promise<ExtendedPayload | undefined>;
export declare type SetTilesCallback<ExtendedPayload> = (tiles: Map<Node, TilePayload & {
    data?: ExtendedPayload;
}>) => void;
export declare class TilesOverlayService<ExtendedPayload = any> extends EventlessFeatureService<google.custom.TilesOverlayOptions, google.custom.TilesOverlay> {
    isUnmounted: boolean;
    tiles: Map<Node, TilePayload & {
        data?: ExtendedPayload | undefined;
    }>;
    tilesByKey: {
        [key: string]: Node | undefined;
    };
    tilesForAddByKey: {
        [key: string]: Node | undefined;
    };
    tilesForDelete: Node[];
    tilesForAdd: Array<{
        node: Node;
        payload: TilePayload & {
            data?: ExtendedPayload;
        };
    }>;
    setTiles: SetTilesCallback<ExtendedPayload>;
    extendPayload?: ExtendPayloadCallback<ExtendedPayload>;
    constructor(googleApi: Google, mapService: MapService, options: google.custom.TilesOverlayOptions, setTiles: SetTilesCallback<ExtendedPayload>, extendPayload?: ExtendPayloadCallback<ExtendedPayload>);
    getExtendedData(payload: TilePayload): Promise<ExtendedPayload | undefined>;
    setProps({ setTiles, extendPayload, ...props }: CreateTilesOverlayServiceProps<ExtendedPayload>): void;
    updateProps({ setTiles, extendPayload, ...props }: CreateTilesOverlayServiceProps<ExtendedPayload>): void;
    updateExtendPayloadCallback(extendPayload?: ExtendPayloadCallback<ExtendedPayload>): void;
    setExtendPayloadCallback(extendPayload?: ExtendPayloadCallback<ExtendedPayload>): void;
    updateTilesCallback(setTiles: SetTilesCallback<ExtendedPayload>): void;
    setTilesCallback(setTiles: SetTilesCallback<ExtendedPayload>): void;
    updateTiles(tiles: Map<Node, TilePayload & {
        data?: ExtendedPayload;
    }>): void;
    registerTile: (node: Node, payload: TilePayload) => Promise<void>;
    unregisterTile: (node: Node) => void;
    recalcData(): Promise<void>;
    recalcTiles: (() => void) & import("lodash").Cancelable;
    unmount(): void;
}
