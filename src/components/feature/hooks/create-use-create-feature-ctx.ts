import {useContext} from 'react';
import { FeatureCtx, CreateFeatureCtx } from '../hocs/with-smart-feature-ctx';
import { createUseUpdateFeature } from './create-use-update-feature-ctx';

export const createUseCreateFeatureCtx = <Props, Service>() => {
  const useUpdateFeature = createUseUpdateFeature<Props>();

  return (
    props: Props
  ): void => {
    const setProps = useContext(CreateFeatureCtx) as (props: Props) => void;

    useUpdateFeature(props, setProps);
  }
}