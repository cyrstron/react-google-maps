import React from 'react';
import { useSmartDomOverlay } from './hooks';
import { Overlay } from './components/overlay';
import { DomOverlayProps } from '.';

export const DomOverlay = ({children, ...props}: DomOverlayProps) => {
  const service = useSmartDomOverlay(props);

  return (
    <Overlay service={service}>
      {children}
    </Overlay>
  );
}
