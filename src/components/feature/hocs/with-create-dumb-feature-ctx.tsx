import React from 'react';
import {FeatureService} from '../services';
import {FeatureCtxConsumer, CreateFeatureCtxConsumer} from './with-smart-feature-ctx';
import {CreateFeatureService, CreateServiceProps} from './with-full-feature-ctx';

export const withCreateDumbFeatureCtx = <
  EventName,
  Options,
  EventHandler,
  FeatureHandlers,
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
  Wrapped: React.ComponentType<
    Props & CreateServiceProps<Options & FeatureHandlers, Service>
  >
): React.ComponentType<Props> => {
  const WithCreateDumbFeatureCtx = (props: Props) => (
    <CreateFeatureCtxConsumer>
      {(createFeatureService?: CreateFeatureService<Options & FeatureHandlers>) => createFeatureService && (
        <FeatureCtxConsumer>
          {(featureService?: Service) => (
            <Wrapped 
              featureService={featureService} 
              createFeatureService={createFeatureService}
              {...props}
            />
          )}
        </FeatureCtxConsumer>
      )}
    </CreateFeatureCtxConsumer>
  );

  return WithCreateDumbFeatureCtx;
};
