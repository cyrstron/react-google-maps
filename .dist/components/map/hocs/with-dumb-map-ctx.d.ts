import React from 'react';
import { MapService } from '../services';
export interface WrappedProps {
    mapService: MapService;
}
export declare const withDumbMapCtx: <Props extends {}>(Wrapped: React.ComponentType<Props & WrappedProps>) => React.ComponentType<Props>;
