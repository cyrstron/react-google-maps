import React from 'react';
import {TilesCtxConsumer, CreateTilesCtxConsumer} from './with-smart-tiles-ctx';
import {CreateServiceProps} from './with-full-tiles-ctx';

export const withCreateDumbTilesCtx = <Props extends {}>(
  Wrapped: React.ComponentType<Props & CreateServiceProps>
): React.ComponentType<Props> => {
  const WithCreateDumbTilesCtx = (props: Props) => (
    <CreateTilesCtxConsumer>
      {(createTilesService) => createTilesService && (
        <TilesCtxConsumer>
          {(tilesService) => (
            <Wrapped 
              tilesService={tilesService} 
              createTilesService={createTilesService}
              {...props}
            />
          )}
        </TilesCtxConsumer>
      )}
    </CreateTilesCtxConsumer>
  );

  return WithCreateDumbTilesCtx;
};
