import React from 'react';
import { useDumbOverlay } from './hooks';
import { OverlayProps } from './';
import { OverlayContainer } from './components/overlay-container';

export const DumbOverlay = ({children, ...props}: OverlayProps) => {
  const service = useDumbOverlay(props);

  return (
    <OverlayContainer service={service}>
      {children}
    </OverlayContainer>
  );
}
