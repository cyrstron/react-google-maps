import React from 'react';
import { useSmartOverlay } from './hooks';
import { OverlayContainer } from './components/overlay-container';
import { OverlayProps } from './';

export const Overlay = ({children, ...props}: OverlayProps) => {
  const service = useSmartOverlay(props);

  return (
    <OverlayContainer service={service}>
      {children}
    </OverlayContainer>
  );
}
