import {Component} from 'react';
import { PolygonService } from './services/polygon-service';
import {CreateServiceProps} from '../../hocs/with-full-feature-ctx';

export type FullPolygonProps = PolygonProps & CreateServiceProps<
  google.maps.PolygonOptions & PolygonEventsProps, 
  PolygonService
>;

export class Polygon extends Component<FullPolygonProps, {}> {
  componentDidUpdate({
    featureService: _featureService,
    createFeatureService: _createFeatureService,
    ...prevProps
  }: FullPolygonProps) {
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
