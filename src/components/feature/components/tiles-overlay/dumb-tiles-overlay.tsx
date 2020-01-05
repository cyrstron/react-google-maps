import React from 'react';
import {useDumbTilesOverlay} from './hooks';
import {Tiles} from './components/tiles';
import {TilesOverlayProps} from '.';

export const DumbTilesOverlay = ({
  TileComponent,
  children,
  ...props
}: TilesOverlayProps) => {
  const tiles = useDumbTilesOverlay(props);

  const {width, height} = props;

  return (
    <Tiles
      tiles={tiles}
      TileComponent={TileComponent}
      width={width}
      height={height}
    >
      {children}
    </Tiles>
  );
};
