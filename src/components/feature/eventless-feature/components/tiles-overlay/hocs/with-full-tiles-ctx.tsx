import React, {Component} from 'react';
import {withDumbMapCtx} from '../../../../../../map/hocs/with-dumb-map-ctx';
import {MapService} from '../../../../../../map';
import {TilesOverlayService, UpdateTilesCallback} from '../services';
import { withGoogleApi } from '../../../../../../google-api';
import { TilePayload } from '../services/tiles-overlay-service';

export type CreateTilesOverlayService = (
  props: google.custom.TilesOverlayOptions,
  updateTiles: UpdateTilesCallback,
  extendPayload: (payload: TilePayload) => Promise<any>,
) => void;

export interface CreateServiceProps {
  createTilesService: CreateTilesOverlayService;
  tilesService?: TilesOverlayService;
}

export const withFullTilesCtx = <Props, ExtendedPayload = any>(
  Wrapped: React.ComponentType<Props & CreateServiceProps>,
): React.ComponentType<Props> => {
  class WithFullTilesOverlayCtx extends Component<
    Props & {mapService: MapService} & {googleApi: Google}, 
    {tilesService?: TilesOverlayService<ExtendedPayload>}
  > {
    constructor(props: Props & {mapService: MapService} & {googleApi: Google}) {
      super(props);

      this.state = {
        tilesService: undefined
      };
    }

    createTilesService: CreateTilesOverlayService = (props, updateTiles, extendPayload) => {
      const {googleApi, mapService} = this.props;

      const tilesService = new TilesOverlayService(
        googleApi, 
        mapService, 
        updateTiles, 
        props,
        extendPayload,
      );

      this.setState({
        tilesService,
      });
    }


    render() {
      const {
        tilesService,
      } = this.state;

      const {
        googleApi,
        mapService,
        ...props
      } = this.props;

      return (
        <Wrapped 
          tilesService={tilesService} 
          createTilesService={this.createTilesService}
          {...props as Props}
        />
      );
    }
  }
  
  return withGoogleApi(withDumbMapCtx<Props & {googleApi: Google}>(WithFullTilesOverlayCtx));
};
