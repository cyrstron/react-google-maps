import React, {createContext} from 'react';
import {CustomOverlayService} from '../services';
import {withFullOverlayCtx, CreateCustomOverlayService, CreateServiceProps} from './with-full-overlay-ctx';

export type OverlayCtxValue = CustomOverlayService | undefined;
export type CreateOverlayCtxValue = CreateCustomOverlayService | undefined;

const OverlayCtx = createContext<OverlayCtxValue>(undefined);
const CreateOverlayCtx = createContext<CreateOverlayCtxValue>(undefined);

export const OverlayCtxProvider = OverlayCtx.Provider;
export const OverlayCtxConsumer = OverlayCtx.Consumer;
export const CreateOverlayCtxProvider = CreateOverlayCtx.Provider;
export const CreateOverlayCtxConsumer = CreateOverlayCtx.Consumer;

export const withSmartOverlayCtx = <Props extends {}>(
  Wrapped: React.ComponentType<Props & {overlayService?: CustomOverlayService}>,
): React.ComponentType<Props> => {
  const WithSmartOverlayCtx = ({
    createOverlayService, 
    ...props
  }: Props & CreateServiceProps) => (
    <CreateOverlayCtxProvider
      value={createOverlayService}
    >
      <OverlayCtxProvider
        value={props.overlayService}
      >
        <Wrapped
          {...props as Props}
        />
      </OverlayCtxProvider>
    </CreateOverlayCtxProvider>
  );
  return withFullOverlayCtx<Props>(WithSmartOverlayCtx);
};
