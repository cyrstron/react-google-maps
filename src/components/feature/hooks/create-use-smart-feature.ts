import {CreateServiceFunction, FeatureService, createUseFeature} from './create-use-feature';
import {createUseUpdateFeature} from './create-use-update-feature-ctx';

export const createUseSmartFeature = <Props, Service extends FeatureService<Props>>(
  createFeatureService: CreateServiceFunction<Props, Service>,
): ((props: Props) => void) => {
  const useFeature = createUseFeature<Props, Service>(createFeatureService);
  const useUpdateFeature = createUseUpdateFeature<Props>();

  return (props: Props): void => {
    const [, setProps] = useFeature();

    useUpdateFeature(props, setProps);
  };
};
