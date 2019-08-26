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
  HandlerName extends string,
>(
  ComponentService: new(
    googleApi: Google, 
    mapService: MapService, 
    props: Options & {[key in HandlerName]?: EventHandler}
  ) => FeatureService<
    EventName,
    Options,
    EventHandler,
    HandlerName
  >,
) => <Props extends {}>(
  Wrapped: React.ComponentType<Props & {
    featureService?: FeatureService<
      EventName,
      Options,
      EventHandler,
      HandlerName
    >
  }>,
): React.ComponentType<Props> => {
  const WithSmartFeatureCtx = ({
    setProps, 
    ...props
  }: Props & CreateServiceProps<
    Options & {[key in HandlerName]?: EventHandler},FeatureService<
      EventName,
      Options,
      EventHandler,
      HandlerName
    >
  >) => (

    <CreateFeatureCtxProvider
      value={setProps}
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
    HandlerName
  >(ComponentService)<Props>(WithSmartFeatureCtx);
};
