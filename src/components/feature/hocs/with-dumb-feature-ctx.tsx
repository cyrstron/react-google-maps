import React from 'react';
import {FeatureService} from '../services';
import {FeatureCtxConsumer} from './with-smart-feature-ctx';

export interface FeatureServiceProps<FeatureService> {
  featureService: FeatureService
}

export const withDumbFeatureCtx = <
  EventName,
  Options,
  EventHandler,
  Feature extends google.maps.Feature<
    EventName,
    Options,
    EventHandler
  >,
  Service extends FeatureService<
    Feature,
    EventName,
    Options,
    EventHandler
  >,
  Props extends {}
>(
  Wrapped: React.ComponentType<Props & FeatureServiceProps<Service>>,
): React.ComponentType<Props> => {
  const WithDumbFeatureCtx = (props: Props) => (
    <FeatureCtxConsumer>
      {(featureService?: Service) => featureService && (
        <Wrapped featureService={featureService as Service} {...props}/>
      )}
    </FeatureCtxConsumer>
  );

  return WithDumbFeatureCtx;
};
