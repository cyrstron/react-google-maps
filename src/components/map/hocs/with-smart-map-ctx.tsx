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

export interface MapServiceProps {
  mapService?: MapService;
}

export type WithSmartMapState = MapServiceProps;

export type CreateMapCtxValue = (
  container: HTMLDivElement, 
  options: google.maps.MapOptions
) => void;

const MapCtx = createContext<MapService | undefined>(undefined);
const CreateMapCtx = createContext<CreateMapCtxValue | undefined>(undefined);

export const MapProvider = MapCtx.Provider;
export const MapConsumer = MapCtx.Consumer;
export const CreateMapProvider = CreateMapCtx.Provider;
export const CreateMapConsumer = CreateMapCtx.Consumer;

export const withSmartMapCtx = <Props extends {}>(
  Wrapped: ComponentType<Props & MapServiceProps>
): ComponentType<Props> => {

  class WithSmartMapCtx extends Component<Props & GoogleApiProps, WithSmartMapState> {
    constructor(props: Props & GoogleApiProps) {
      super(props);

      this.state = {
        mapService: undefined,
      }
    }

    createMapService = (
      container: HTMLDivElement, 
      options: google.maps.MapOptions
    ): void => {
      const {googleApi} = this.props;

      const mapService = new MapService(googleApi, container, options);

      this.setState({
        mapService,
      });
    }

    render() {
      const {mapService} = this.state;

      const {
        googleApi: _googleApi,
        ...props
      } = this.props;
      
      return (
        <CreateMapProvider value={this.createMapService}>
          <MapProvider
            value={mapService}
          >
            <Wrapped
              mapService={mapService}
              {...props as Props}
            />
          </MapProvider>
        </CreateMapProvider>
      );
    }
  }

  return withGoogleApi<Props>(WithSmartMapCtx);
};
