/// <reference types="react" />
import { MapHandlerName, MapEventHandler } from '../';
export declare type MapBroadcasterProps = {
    [key in MapHandlerName]?: MapEventHandler | null;
};
export declare const MapBroadcaster: import("react").ComponentType<MapBroadcasterProps>;
