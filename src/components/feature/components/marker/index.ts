import {Marker as MarkerWrapped} from './marker';
import {MarkerService} from './services';
import { 
  withDumbFeatureCtx, 
  FeatureServiceProps,
  withCreateDumbFeatureCtx,
  withSmartFeatureCtx,
  withFullFeatureCtx,
} from '../../hocs';

export const Marker = withFullFeatureCtx<
  MarkerEventName,
  google.maps.MarkerOptions,
  MarkerEventHandler,
  MarkerEventsProps,
  google.maps.Marker,
  MarkerService
>(MarkerService)<MarkerProps>(MarkerWrapped);
export const DumbMarker = withCreateDumbFeatureCtx<
  MarkerEventName,
  google.maps.MarkerOptions,
  MarkerEventHandler,
  MarkerEventsProps,
  google.maps.Marker,
  MarkerService,
  MarkerProps
>(MarkerWrapped);
export const withSmartMarkerCtx = withSmartFeatureCtx<
  MarkerEventName,
  google.maps.MarkerOptions,
  MarkerEventHandler,
  MarkerEventsProps,
  google.maps.Marker,
  MarkerService
>(MarkerService);
export const withDumbMarkerCtx = <Props extends {}>(
  Wrapped: React.ComponentType<Props & FeatureServiceProps<MarkerService>>,
) => (
  withDumbFeatureCtx<
    MarkerEventName,
    google.maps.MarkerOptions,
    MarkerEventHandler,
    google.maps.Marker,
    MarkerService,
    Props
  >(Wrapped)
);

export {
  MarkerService,
};
