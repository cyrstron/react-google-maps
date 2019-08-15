import {Polygon as PolygonWrapped} from './polygon';
import {PolygonService} from './services';
import { 
  withDumbFeatureCtx, 
  FeatureServiceProps,
  withCreateDumbFeatureCtx,
  withSmartFeatureCtx,
  withFullFeatureCtx,
} from '../../hocs';

export const Polygon = withFullFeatureCtx<
  PolygonEventName,
  google.maps.PolygonOptions,
  PolygonEventHandler,
  PolygonEventsProps,
  google.maps.Polygon,
  PolygonService
>(PolygonService)<PolygonProps>(PolygonWrapped);

export const DumbPolygon = withCreateDumbFeatureCtx<
  PolygonEventName,
  google.maps.PolygonOptions,
  PolygonEventHandler,
  PolygonEventsProps,
  google.maps.Polygon,
  PolygonService,
  PolygonProps
>(PolygonWrapped);

export const withSmartPolygonCtx = withSmartFeatureCtx<
  PolygonEventName,
  google.maps.PolygonOptions,
  PolygonEventHandler,
  PolygonEventsProps,
  google.maps.Polygon,
  PolygonService
>(PolygonService);

export const withDumbPolygonCtx = <Props extends {}>(
  Wrapped: React.ComponentType<Props & FeatureServiceProps<PolygonService>>,
) => (
  withDumbFeatureCtx<
    PolygonEventName,
    google.maps.PolygonOptions,
    PolygonEventHandler,
    google.maps.Polygon,
    PolygonService,
    Props
  >(Wrapped)
);

export {
  PolygonService,
};
