import { Component } from 'react';
import { MarkerService } from './services/marker-service';

export class Marker extends Component<
  MarkerProps & {
    featureService?: MarkerService
  } & {
    createFeatureService: (props: google.maps.MarkerOptions & MarkerEventsProps) => void
  }, 
  {}
> {
  componentDidUpdate({
    featureService: _featureService,
    createFeatureService: _createFeatureService,
    ...prevProps
  }: MarkerProps & {
    featureService?: MarkerService
    } & {
      createFeatureService: (props: google.maps.MarkerOptions & MarkerEventsProps) => void
    }
  ) {
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

  render() {
    return null;
  }
}
