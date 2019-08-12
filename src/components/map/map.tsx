import React, { Component, ReactNode, RefObject, createRef } from 'react';
import {WrappedProps} from './hocs/with-smart-map-ctx';
import {MapStore} from './stores';
import { MapService, groupMapProps } from './services';

export type MapComponentProps = MapProps & WrappedProps & {
  children?: ReactNode | null;
};

type Props = MapComponentProps;

export class Map extends Component<Props, {}> {
  map: RefObject<HTMLDivElement> = createRef();
  mapService?: MapService;

  componentDidMount() {
    const {
      defaultCenter,
      children,
      className,
      createMapService,
      ...props
    } = this.props;

    this.mapService = createMapService(this.map.current!, props);
  }

  componentDidUpdate({
    defaultCenter: _defaultCenter,
    children: _children,
    className: _className,
    ...prevProps
  }: Props) {
    const {
      defaultCenter,
      children,
      className,
      ...props
    } = this.props;

    const {mapService} = this;

    if (!mapService) return;

    const {
      options, 
      handlers
    } = groupMapProps(this.props);
    
    const {
      options: prevOptions, 
      handlers: prevHandlers
    } = groupMapProps(prevProps);
  }

  mapRef = (mapContainer: HTMLDivElement) => {
    if (this.mapContainer) return;

    this.mapContainer = mapContainer;
  }

  render() {
    const {
      children,
      className,
      mapStore,
    } = this.props;

    return (
      <div className={className} ref={this.map} >
        {mapStore.isLoaded && children}
      </div>
    );
  }
}
