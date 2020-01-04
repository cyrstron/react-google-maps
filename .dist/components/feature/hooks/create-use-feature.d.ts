import { MapService } from '../../map';
export interface FeatureService<Props> {
    updateProps: (props: Props) => void;
    unmount: () => void;
}
export declare type CreateServiceFunction<Props, Service extends FeatureService<Props>> = (googleApi: Google, mapService: MapService, props: Props) => Service;
export declare const createUseFeature: <Props, Service extends FeatureService<Props>>(createService: CreateServiceFunction<Props, Service>) => () => [Service | undefined, (props: Props) => void];
