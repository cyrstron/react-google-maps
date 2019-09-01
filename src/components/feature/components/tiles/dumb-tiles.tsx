import React from 'react';
import { useDumbTiles } from './hooks';
import { TilesContainer } from './components/tiles-container';
import { TilesProps } from './';

export const DumbTiles = ({
    TileComponent,
    children,
    ...props
}: TilesProps) => {
  const tiles = useDumbTiles(props);

  const {width, height} = props;

  return (
    <TilesContainer 
      tiles={tiles}
      children={children}
      TileComponent={TileComponent}
      width={width}
      height={height}
    />
  );
}
