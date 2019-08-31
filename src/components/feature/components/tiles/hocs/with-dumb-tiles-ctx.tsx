import React from 'react';
import {TilesOverlayService} from '../services';
import {TilesCtxConsumer} from './with-smart-tiles-ctx';

export interface TilesServiceProps {
  tilesService: TilesOverlayService
}

export const withDumbTilesCtx = <Props extends {}>(
  Wrapped: React.ComponentType<Props & TilesServiceProps>,
): React.ComponentType<Props> => {
  const WithDumbTilesCtx = (props: Props) => (
    <TilesCtxConsumer>
      {(tilesService) => tilesService && (
        <Wrapped 
          tilesService={tilesService} 
          {...props}
        />
      )}
    </TilesCtxConsumer>
  );

  return WithDumbTilesCtx;
};
