import React, {Component} from 'react';
import {withDumbMapCtx} from '../../map/hocs/with-dumb-map-ctx';
import {MapService} from '../../map';
import {FeatureService} from '../services';
import { withGoogleApi } from '../../../components/google-api';

export type CreateFeatureService<Props> = (props: Props) => void

export interface CreateServiceProps<Props, Service> {
  createFeatureService: CreateFeatureService<Props>;
  featureService?: Service;
}

export const withFullFeatureCtx = <
  EventName,
  Options,
  EventHandler,
  FeatureHandlers,
  Feature extends google.maps.Feature<
    EventName,
    Options,
    EventHandler
  >,
  Service extends FeatureService<
    Feature,
    EventName,
    Options,
    EventHandler
  >,
>(
  ComponentService: new(googleApi: Google, mapService: MapService, props: Options & FeatureHandlers) => Service,
) => <Props extends {}>(
  Wrapped: React.ComponentType<Props & CreateServiceProps<Options & FeatureHandlers, Service>>,
): React.ComponentType<Props> => {
  class WithFullFeatureCtx extends Component<
    Props & {mapService: MapService} & {googleApi: Google}, 
    {featureService?: Service}
  > {
    constructor(props: Props & {mapService: MapService} & {googleApi: Google}) {
      super(props);

      this.state = {
        featureService: undefined
      };
    }

    createFeatureService = (props: Options & FeatureHandlers): void => {
      const {googleApi, mapService} = this.props;

      this.setState({
        featureService: new ComponentService(googleApi, mapService, props),
      })
    }

    render() {
      const {
        featureService,
      } = this.state;

      const {
        googleApi,
        mapService,
        ...props
      } = this.props;

      return (
        <Wrapped 
          featureService={featureService} 
          createFeatureService={this.createFeatureService}
          {...props as Props}
        />
      );
    }
  }

  return withGoogleApi(withDumbMapCtx<Props & {googleApi: Google}>(WithFullFeatureCtx));
};
