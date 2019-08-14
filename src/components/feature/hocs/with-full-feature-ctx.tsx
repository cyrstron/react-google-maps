import React, {Component} from 'react';
import {withDumbMapCtx} from '../../map/hocs/with-dumb-map-ctx';
import {MapService} from '../../map';
import {FeatureService} from '../services';
import { withGoogleApi } from 'components/google-api';

export const withFullFeatureCtx = <
  EventName,
  Options,
  EventHandler,
  HandlerName,
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
  ComponentService: new(google: Google, mapService: MapService) => Service,
) => <Props extends {}>(
  Wrapped: React.ComponentType<Props & {featureService: Service}>,
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

    createService(options: Options) {

    }

    componentDidMount() {
      const {
        mapService,
        googleApi,
      } = this.props;

      this.setState({

      })
      this.featureStore = new ComponentService(googleApi, mapService);
    }

    componentWillUnmount() {
      const {featureStore} = this;

      if (!featureStore) return;

      featureStore.remove();
    }

    render() {
      const {featureStore} = this;
      const {
        mapStore,
        googleMapsStore,
        ...props
      } = this.props;

      if (!featureStore) return null;

      return (
        <Wrapped featureStore={featureStore} {...props as Props}/>
      );
    }
  }

  return withGoogleApi(withDumbMapCtx<Props & {googleApi: Google}>(WithFullFeatureCtx));
};
