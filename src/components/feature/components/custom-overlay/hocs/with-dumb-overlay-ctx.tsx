import React from 'react';
import {CustomOverlayService} from '../services';
import {OverlayCtxConsumer} from './with-smart-overlay-ctx';

export interface OverlayServiceProps {
  overlayService: CustomOverlayService
}

export const withDumbOverlayCtx = <Props extends {}>(
  Wrapped: React.ComponentType<Props & OverlayServiceProps>,
): React.ComponentType<Props> => {
  const WithDumbOverlayCtx = (props: Props) => (
    <OverlayCtxConsumer>
      {(overlayService) => overlayService && (
        <Wrapped 
          overlayService={overlayService} 
          {...props}
        />
      )}
    </OverlayCtxConsumer>
  );

  return WithDumbOverlayCtx;
};
