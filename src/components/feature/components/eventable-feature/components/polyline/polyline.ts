import {Component} from 'react';
import { PolylineService } from './services/polyline-service';
import {CreateServiceProps} from '../../hocs/with-full-feature-ctx';
import { PolylineProps, PolylineEventsProps } from '../polyline';

export type FullPolylineProps = PolylineProps & CreateServiceProps<
  google.maps.PolylineOptions & PolylineEventsProps, 
  PolylineService
>;

export class Polyline extends Component<FullPolylineProps, {}> {
  componentDidUpdate({
    featureService: _featureService,
    createFeatureService: _createFeatureService,
    ...prevProps
  }: FullPolylineProps) {
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
      ...polygonOptions
    } = this.props;

    createFeatureService(polygonOptions);
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
