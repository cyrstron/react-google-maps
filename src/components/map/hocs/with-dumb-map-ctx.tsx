import React from 'react';
import {
  MapConsumer,
} from './with-smart-map-ctx';
import { MapService } from '../services';

export interface WrappedProps {
  mapService: MapService;
}

export const withDumbMapCtx = <Props extends {}>(
  Wrapped: React.ComponentType<Props & WrappedProps>,
): React.ComponentType<Props> => {
  const WithDumbMapCtx = (props: Props) => (
    <MapConsumer>
      {(value) => value && (
        <Wrapped 
          mapService={value.mapService} 
          {...props}
        />
      )}
    </MapConsumer>
  );

  return WithDumbMapCtx;
};
