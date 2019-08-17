import React, {Component} from 'react';
import {withDumbMapCtx} from '../../map/hocs/with-dumb-map-ctx';
import {MapService} from '../../map';
import {TilesOverlayService, UpdateTilesCallback} from '../services';
import { withGoogleApi } from '../../google-api';

export type CreateTilesOverlayService = (
  props: google.custom.TilesOverlayOptions,
  updateTiles: UpdateTilesCallback,
) => void;

export interface CreateServiceProps {
  createTilesService: CreateTilesOverlayService;
  tilesService?: TilesOverlayService;
}

export const withFullTilesCtx = <Props extends {}>(
  Wrapped: React.ComponentType<Props & CreateServiceProps>,
): React.ComponentType<Props> => {
  class WithFullTilesOverlayCtx extends Component<
    Props & {mapService: MapService} & {googleApi: Google}, 
    {tilesService?: TilesOverlayService}
  > {
    constructor(props: Props & {mapService: MapService} & {googleApi: Google}) {
      super(props);

      this.state = {
        tilesService: undefined
      };
    }

    createTilesService: CreateTilesOverlayService = (props, updateTiles) => {
      const {googleApi, mapService} = this.props;

      const tilesService = new TilesOverlayService(
        googleApi, 
        mapService, 
        updateTiles, 
        props
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
