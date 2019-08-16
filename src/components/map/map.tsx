import React, { Component, ReactNode, RefObject, createRef } from 'react';
import {WrappedProps} from './hocs/with-dumb-create-map-ctx';
import { MapService } from './services';
import { MapProps } from './';

export type MapComponentProps = MapProps & WrappedProps & {
  children?: ReactNode | null;
};

export type Props = MapComponentProps;

export class Map extends Component<Props, {}> {
  map: RefObject<HTMLDivElement> = createRef();
  mapService?: MapService;

  componentDidMount() {
    const {
      defaultCenter,
      children,
      className,
      createMapService,
      mapService,
      ...props
    } = this.props;

    createMapService(this.map.current!, {
      center: defaultCenter, 
      ...props
    });
  }

  componentDidUpdate({
    defaultCenter: _defaultCenter,
    children: _children,
    className: _className,
    createMapService: _createMapService,
    mapService: _mapService,
    ...prevProps
  }: Props) {
    const {
      defaultCenter,
      children,
      className,
      createMapService,
      mapService,
      ...props
    } = this.props;

    if (!mapService) return;

    mapService.updateProps(
      prevProps,
      props
    );
  }

  componentWillUnmount() {
    if (!this.mapService) return;

    this.mapService.resetListeners();
  }

  render() {
    const {
      children,
      className,
      mapService,
    } = this.props;

    return (
      <div className={className} ref={this.map} >
        {mapService && children}
      </div>
    );
  }
}
