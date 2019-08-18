import React, {Component, ReactNode, ComponentType, Fragment} from 'react';
import {createPortal} from 'react-dom';
import {CreateServiceProps} from './hocs/with-full-tiles-ctx';
import { TilePayload } from './services/tiles-overlay-service';
import {Tile} from './components/tile';

export type TilesOverlayProps = google.custom.TilesOverlayOptions & {
  children?: (props: {
    tileCoord: google.maps.Point,
    zoom: number,
    width: number,
    height: number,
    data?: any,
  }) => ReactNode | null;
  TileComponent?: ComponentType<{
    tileCoord: google.maps.Point,
    zoom: number,
    width: number,
    height: number,
    data?: any,
  }>;  
  extendPayload?: (payload: TilePayload) => Promise<any>,
  width: number,
  height?: number,
}

export type FullTilesOverlayProps = TilesOverlayProps & CreateServiceProps;

export interface TilesOverlayState {
  tiles: Map<Node, TilePayload & {data?: any}>;
}

export class TilesOverlay extends Component<
  FullTilesOverlayProps, 
  TilesOverlayState
> {
  constructor(props: FullTilesOverlayProps) {
    super(props);

    this.state = {
      tiles: new Map<Node, TilePayload>(),
    };
  }

  // registerTile = (
  //   node: Node, 
  //   payload: {
  //     tileCoord: google.maps.Point,
  //     zoom: number,
  //   }
  // ): void => {
  //   const {
  //     tilesService,
  //     extendPayload,
  //   } = this.props;

  //   if (!tilesService) return;

  //   tilesService.registerTile(node, payload, extendPayload);
  // }

  // unregisterTile = (node: Node): void => {
  //   const {
  //     tilesService,
  //   } = this.props;

  //   if (!tilesService) return;

  //   tilesService.unregisterTile(node);
  // }

  updateTiles = (tiles: Map<Node, TilePayload & {data?: any}>) => {
    this.setState({tiles});
  }

  componentDidMount() {
    const {
      createTilesService,
      tilesService,
      children,
      TileComponent,
      extendPayload,
      ...options
    } = this.props;

    createTilesService(options, this.updateTiles, extendPayload);
  }

  render() {
    const {
      TileComponent,
      children,
      width,
      height,
    } = this.props;

    const {tiles} = this.state;

    const tileNodes = [...tiles.keys()];  
    
    return tileNodes.map((tile) => {
      const payload = tiles.get(tile);

      if (!payload) return null;

      const {
        tileCoord: {x, y},
        zoom,
        data,
      } = payload;

      return (
        <Fragment key={`${x}-${y}-${zoom}-${width}-${height || width}`}>
          {
            createPortal((
            <Tile
              {...payload} 
              width={width} 
              height={height || width}           
            >
              {(props) => {
                if (children) {
                  return children({data, ...props})
                } else if (TileComponent) {
                  return (                  
                    <TileComponent
                      {...props}
                      data={data}
                    />
                  )
                } else {
                  return null;
                }
              }}
            </Tile>
          ), tile as Element)
        }
      </Fragment>
    );
  });
  }
}
