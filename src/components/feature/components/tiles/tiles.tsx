import React from 'react';
import { useSmartTiles } from './hooks';
import { TilesContainer } from './components/tiles-container';
import { TilesProps } from './';

export const Tiles = ({
    TileComponent,
    children,
    ...props
}: TilesProps) => {
  const tiles = useSmartTiles(props);

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
