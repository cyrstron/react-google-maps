import React, {Component} from 'react';
import {withDumbMapCtx} from '../../../../map/hocs/with-dumb-map-ctx';
import {MapService} from '../../../../map';
import {CustomOverlayService} from '../services';
import { withGoogleApi } from '../../../../google-api';

export type CreateCustomOverlayService = (
  props: google.custom.CustomOverlayOptions
) => void;

export interface CreateServiceProps {
  createOverlayService: CreateCustomOverlayService;
  overlayService?: CustomOverlayService;
}

export const withFullOverlayCtx = <Props extends {}>(
  Wrapped: React.ComponentType<Props & CreateServiceProps>,
): React.ComponentType<Props> => {
  class WithFullOverlayCtx extends Component<
    Props & {mapService: MapService} & {googleApi: Google}, 
    {overlayService?: CustomOverlayService}
  > {
    constructor(props: Props & {mapService: MapService} & {googleApi: Google}) {
      super(props);

      this.state = {
        overlayService: undefined
      };
    }

    createOverlayService: CreateCustomOverlayService = (props) => {
      const {googleApi, mapService} = this.props;

      const overlayService = new CustomOverlayService(googleApi, mapService, props);

      this.setState({
        overlayService,
      });
    }

    render() {
      const {
        overlayService,
      } = this.state;

      const {
        googleApi,
        mapService,
        ...props
      } = this.props;

      return (
        <Wrapped 
          overlayService={overlayService} 
          createOverlayService={this.createOverlayService}
          {...props as Props}
        />
      );
    }
  }

  return withGoogleApi(withDumbMapCtx<Props & {googleApi: Google}>(WithFullOverlayCtx));
};
