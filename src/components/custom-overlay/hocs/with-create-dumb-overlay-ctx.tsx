import React from 'react';
import {OverlayCtxConsumer, CreateOverlayCtxConsumer} from './with-smart-overlay-ctx';
import {CreateServiceProps} from './with-full-overlay-ctx';

export const withCreateDumbOverlayCtx = <Props extends {}>(
  Wrapped: React.ComponentType<Props & CreateServiceProps>
): React.ComponentType<Props> => {
  const WithCreateDumbOverlayCtx = (props: Props) => (
    <CreateOverlayCtxConsumer>
      {(createOverlayService) => createOverlayService && (
        <OverlayCtxConsumer>
          {(overlayService) => (
            <Wrapped 
              overlayService={overlayService} 
              createOverlayService={createOverlayService}
              {...props}
            />
          )}
        </OverlayCtxConsumer>
      )}
    </CreateOverlayCtxConsumer>
  );

  return WithCreateDumbOverlayCtx;
};
