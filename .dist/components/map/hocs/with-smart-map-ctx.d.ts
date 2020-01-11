import React, { Ref } from 'react';
import { MapService } from '../services';
import { MapProps } from '../';
export interface MapServiceProps {
    mapService?: MapService;
}
export interface CreateMapCtxValue {
    ref: Ref<HTMLDivElement>;
    setProps: (props: MapProps) => void;
}
export declare const MapCtx: React.Context<MapService | undefined>;
export declare const CreateMapCtx: React.Context<CreateMapCtxValue | undefined>;
export declare const MapConsumer: React.Consumer<MapService | undefined>;
export declare const CreateMapConsumer: React.Consumer<CreateMapCtxValue | undefined>;
export declare const withSmartMapCtx: <Props extends {}>(Wrapped: React.ComponentType<Props & MapServiceProps>) => React.ComponentType<Props>;
