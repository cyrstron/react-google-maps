import React, {createContext} from 'react';
import {MapService} from '../../map';
import {FeatureService} from '../services';
import {withFullFeatureCtx, CreateServiceProps} from './with-full-feature-ctx';

export type FeatureCtxValue = any | undefined;
export type CreateFeatureCtxValue = any | undefined;

const FeatureCtx = createContext<FeatureCtxValue>(undefined);
const CreateFeatureCtx = createContext<CreateFeatureCtxValue>(undefined);

export const FeatureCtxProvider = FeatureCtx.Provider;
export const FeatureCtxConsumer = FeatureCtx.Consumer;
export const CreateFeatureCtxProvider = CreateFeatureCtx.Provider;
export const CreateFeatureCtxConsumer = CreateFeatureCtx.Consumer;

export const withSmartFeatureCtx = <
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
  >
>(
  ComponentService: new(googleApi: Google, mapService: MapService, props: Options & FeatureHandlers) => Service,
) => <Props extends {}>(
  Wrapped: React.ComponentType<Props & {featureService?: Service}>,
): React.ComponentType<Props> => {
  const WithSmartFeatureCtx = ({
    createFeatureService, 
    ...props
  }: Props & CreateServiceProps<Options & FeatureHandlers, Service>) => (
    <CreateFeatureCtxProvider
      value={createFeatureService}
    >
      <FeatureCtxProvider
        value={props.featureService}
      >
        <Wrapped
          {...props as Props}
        />
      </FeatureCtxProvider>
    </CreateFeatureCtxProvider>
  );

  return withFullFeatureCtx<
    EventName,
    Options,
    EventHandler,
    FeatureHandlers,
    Feature,
    Service
  >(ComponentService)<Props>(WithSmartFeatureCtx);
};
