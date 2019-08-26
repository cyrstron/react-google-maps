import { Component } from 'react';
import { MarkerService } from './services/marker-service';
import {CreateServiceProps} from '../../hocs/with-full-feature-ctx';
import { 
  MarkerProps, 
  MarkerEventsProps 
} from './';

export type FullMarkerProps = MarkerProps & CreateServiceProps<
  google.maps.MarkerOptions & MarkerEventsProps, 
  MarkerService
>;

export class Marker extends Component<
  FullMarkerProps,
  {}
> {
  componentDidUpdate({
    featureService: _featureService,
    createFeatureService: _createFeatureService,
    ...prevProps
  }: FullMarkerProps) {
    const {
      featureService,
      createFeatureService,
      ...props
    } = this.props;

    if (!featureService) return;

    featureService.updateOptions(prevProps, props);
  }

  componentDidMount() {
    const {
      featureService,
      createFeatureService,
      ...markerOptions
    } = this.props;

    createFeatureService(markerOptions);
  }

  componentWillUnmount() {
    const {
      featureService,
    } = this.props;

    if (!featureService) return;

    featureService.remove();
  }

  render() {
    return null;
  }
}
