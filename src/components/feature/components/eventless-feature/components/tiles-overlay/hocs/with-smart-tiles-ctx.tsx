import React, {createContext} from 'react';
import {TilesOverlayService} from '../services';
import {
  withFullTilesCtx, 
  CreateTilesOverlayService, 
  CreateServiceProps
} from './with-full-tiles-ctx';

export type TilesCtxValue = TilesOverlayService | undefined;
export type CreateTilesCtxValue = CreateTilesOverlayService | undefined;

const TilesCtx = createContext<TilesCtxValue>(undefined);
const CreateTilesCtx = createContext<CreateTilesCtxValue>(undefined);

export const TilesCtxProvider = TilesCtx.Provider;
export const TilesCtxConsumer = TilesCtx.Consumer;
export const CreateTilesCtxProvider = CreateTilesCtx.Provider;
export const CreateTilesCtxConsumer = CreateTilesCtx.Consumer;

export const withSmartTilesCtx = <Props, ExtendedPayload = any>(
  Wrapped: React.ComponentType<Props & {tilesService?: TilesOverlayService}>,
): React.ComponentType<Props> => {
  const WithSmartTilesCtx = ({
    createTilesService, 
    ...props
  }: Props & CreateServiceProps) => (
    <CreateTilesCtxProvider
      value={createTilesService}
    >
      <TilesCtxProvider
        value={props.tilesService as TilesOverlayService}
      >
        <Wrapped
          {...props as Props}
        />
      </TilesCtxProvider>
    </CreateTilesCtxProvider>
  );
  return withFullTilesCtx<Props, ExtendedPayload>(WithSmartTilesCtx);
};
