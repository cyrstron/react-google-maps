import React, {
  Component, 
  createContext, 
  ComponentType,
} from 'react';
import { MapService } from '../services';
import {withGoogleApi} from '../../google-api';

export interface GoogleApiProps {
  googleApi: Google;
}

export interface WithSmartMapState {
  mapService: MapService | null;
}

export interface WrappedProps {
  createMapService: (
    container: HTMLDivElement, 
    options: google.maps.MapOptions
  ) => MapService,
}

export interface MapCtxValue {
  mapService: MapService,
}

const MapCtx = createContext<MapCtxValue | null>(null);

export const MapProvider = MapCtx.Provider;
export const MapConsumer = MapCtx.Consumer;

export const withSmartMapCtx = <Props extends {}>(
  Wrapped: ComponentType<Props & WrappedProps>
): ComponentType<Props> => {

  class WithSmartMapCtx extends Component<Props & GoogleApiProps, WithSmartMapState> {
    constructor(props: Props & GoogleApiProps) {
      super(props);

      this.state = {
        mapService: null,
      }
    }

    createMapService = (
      container: HTMLDivElement, 
      options: google.maps.MapOptions
    ): MapService => {
      const {googleApi} = this.props;

      const mapService = new MapService(googleApi, container, options);

      this.setState({
        mapService,
      });

      return mapService;
    }

    render() {
      const {mapService} = this.state;

      const {
        googleApi: _googleApi,
        ...props
      } = this.props;
      
      return (
        <MapCtx.Provider
          value={mapService && {mapService}}
        >
          <Wrapped
            createMapService={this.createMapService}
            {...props as Props}
          />
        </MapCtx.Provider>
      );
    }
  }

  return withGoogleApi<Props>(WithSmartMapCtx);
};
