import React, {ComponentType} from 'react';
import {MapService} from '../../../../map';
import {FeatureService} from '../services';
import { useFeature } from '../hooks/use-feature';

export type CreateFeatureService<Props> = (props: Props) => void

export interface CreateServiceProps<Props, Service> {
  featureService?: Service;
  setProps: (props: Props) => void;
}

export const withFullFeatureCtx = <
  Feature extends google.maps.Feature<
    EventName,
    Options,
    EventHandler
  >,
  EventName,
  Options,
  EventHandler,
  HandlerName extends string,
>(
  ComponentService: new(
    googleApi: Google, 
    mapService: MapService, 
    props: Options & {[key in HandlerName]?: EventHandler}
  ) => FeatureService<
    Feature,
    EventName,
    Options,
    EventHandler,
    HandlerName
  >,
) => {
  const useService = useFeature<EventName, Options, EventHandler, HandlerName>(ComponentService);

  return <Props extends {}>(
    Wrapped: ComponentType<
      Props & CreateServiceProps<Options & {[key in HandlerName]?: EventHandler}, 
      FeatureService<
        Feature,
        EventName,
        Options,
        EventHandler,
        HandlerName
      >
    >>,
  ): React.ComponentType<Props> => {
    const WithFullFeatureCtx = (props: Props) => {
      const [service, setProps] = useService();

      return (
        <Wrapped 
          featureService={service}
          setProps={setProps}
          {...props as Props}         
        />
      );

    }

    return WithFullFeatureCtx;
  };
};