/// <reference types="googlemaps" />
import React from 'react';
import { TilePayload } from "../services/tiles-overlay-service";
declare const Tiles: <ExtendedPayload extends {} = any>({ TileComponent, children, tiles, width, height }: {
    children?: ((props: {
        tileCoord: google.maps.Point;
        zoom: number;
        width: number;
        height: number;
        data?: any;
    }) => React.ReactNode) | undefined;
    TileComponent?: React.ComponentClass<TilePayload & {
        width: number;
        height: number;
        data?: any;
    }, any> | React.FunctionComponent<TilePayload & {
        width: number;
        height: number;
        data?: any;
    }> | undefined;
    tiles: Map<Node, TilePayload & {
        data?: ExtendedPayload | undefined;
    }>;
    width: number;
    height?: number | undefined;
}) => JSX.Element;
export { Tiles };
