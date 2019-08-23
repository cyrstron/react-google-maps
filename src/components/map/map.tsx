import React, { ReactNode, useContext, useEffect } from 'react';
import { MapProps } from './';
import { CreateMapCtx } from './hocs/with-smart-map-ctx';

export type MapComponentProps = MapProps & {
  children?: ReactNode | null;
};

export type Props = MapComponentProps;

export const Map = ({
  children,
  className,
  ...props
}: MapComponentProps) => {
  const createCtx = useContext(CreateMapCtx);

  if (!createCtx) return null;

  const {ref, service, setProps} = createCtx;

  useEffect(() => {
    setProps(props);
  }, Object.values(props))
  
  return (
    <div className={className} ref={ref} >
      {service && children}
    </div>
  )
}
