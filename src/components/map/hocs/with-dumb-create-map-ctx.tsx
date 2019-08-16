import React from 'react';
import {
  MapConsumer,
  CreateMapConsumer
} from './with-smart-map-ctx';
import { MapService } from '../services';
import { MapEventsProps } from '../';

export interface WrappedProps {
  mapService?: MapService;
  createMapService: (
    container: HTMLDivElement, 
    options: google.maps.MapOptions & MapEventsProps 
  ) => void
}

export const withDumbCreateMapCtx = <Props extends {}>(
  Wrapped: React.ComponentType<Props & WrappedProps>,
): React.ComponentType<Props> => {
  const WithDumbMapCtx = (props: Props) => (
    <CreateMapConsumer>
      {(createMapService) => createMapService && (
        <MapConsumer>
          {(mapService) => (
            <Wrapped 
              createMapService={createMapService} 
              mapService={mapService} 
              {...props}
            />
          )}
        </MapConsumer>
      )}
    </CreateMapConsumer>
  );

  return WithDumbMapCtx;
};
