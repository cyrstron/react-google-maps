import React from 'react';
import {FeatureService} from '../services';
import {FeatureCtxConsumer, CreateFeatureCtxConsumer} from './with-smart-feature-ctx';

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
    Props & {
      featureService?: Service
    } & {
      createFeatureService: (props: Options & FeatureHandlers) => void
    }
  >,
): React.ComponentType<Props> => {
  const WithCreateDumbFeatureCtx = (props: Props) => (
    <CreateFeatureCtxConsumer>
      {(createFeatureService: (props: Options & FeatureHandlers) => void) => createFeatureService && (
        <FeatureCtxConsumer>
          {(featureService: Service | undefined) => (
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
