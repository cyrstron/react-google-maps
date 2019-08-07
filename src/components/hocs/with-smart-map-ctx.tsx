import {observable} from 'mobx';
import {inject, observer, Provider as MobxProvider} from 'mobx-react';
import React, {Component, createContext, ComponentType} from 'react';
import {GoogleMapsStore} from '../../stores';
import {MapStore} from '../components/map';

export interface GoogleStoreProps {
  googleMapsStore?: GoogleMapsStore;
}

export interface WrappedProps<Store extends MapStore> {
  mapStore: Store,
}

export interface ContextValue {
  mapStore?: any,
}

export const MapContext = createContext<ContextValue>({});

export const withSmartMapCtx = <Store extends MapStore>(
  Store: new(google: Google) => Store,
) => <Props extends {apiKey: string}>(
  Wrapped: React.ComponentType<Props & WrappedProps<Store>>
): React.ComponentType<Props> => {
  // @inject('googleMapsStore')
  @observer
  class WithSmartMapCtx extends Component<Props & GoogleStoreProps, {}> {
    @observable isStoreCreated: boolean = false;
    googleMapsStore: GoogleMapsStore;
    mapStore?: Store;

    constructor(props: Props) {
      super(props);

      const {apiKey} = props;

      this.googleMapsStore = new GoogleMapsStore(apiKey);
    }

    async componentDidMount(): Promise<void> {
      const {googleMapsStore} = this;

      await googleMapsStore.init();

      if (!googleMapsStore.isLoaded) return;

      this.mapStore = new Store(this.googleMapsStore.google as Google);
      this.isStoreCreated = true;
    }

    render() {
      const {mapStore} = this;
      const {
        googleMapsStore,
        ...props
      } = this.props;

      if (!this.googleMapsStore.isLoaded || !this.isStoreCreated) return null;

      return (
        <MobxProvider
          googleMapsStore={this.googleMapsStore}
        >
          <MapContext.Provider
            value={{mapStore}}
          >
            <Wrapped
              mapStore={mapStore as Store}
              {...props as Props}
            />
          </MapContext.Provider>
        </MobxProvider>
      );
    }
  }

  return WithSmartMapCtx;
};
