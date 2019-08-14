import {withFullFeatureCtx} from '../../hocs/with-full-feature-ctx';
import {withSmartFeatureCtx} from '../../hocs/with-smart-feature-ctx';
import {withCreateDumbFeatureCtx} from '../../hocs/with-create-dumb-feature-ctx';
import {Marker} from './marker';
import {MarkerService} from './services';

export const SmartMarker = withFullFeatureCtx<
  MarkerEventName,
  google.maps.MarkerOptions,
  MarkerEventHandler,
  MarkerEventsProps,
  google.maps.Marker,
  MarkerService
>(MarkerService)<MarkerProps>(Marker);
export const DumbMarker = withCreateDumbFeatureCtx<
  MarkerEventName,
  google.maps.MarkerOptions,
  MarkerEventHandler,
  MarkerEventsProps,
  google.maps.Marker,
  MarkerService,
  MarkerProps
>(Marker);
export const withSmartMarkerCtx = withSmartFeatureCtx<
  MarkerEventName,
  google.maps.MarkerOptions,
  MarkerEventHandler,
  MarkerEventsProps,
  google.maps.Marker,
  MarkerService
>(MarkerService);

export {
  MarkerService,
  Marker,
};

export {withDumbFeatureCtx} from '../../hocs/with-dumb-feature-ctx';