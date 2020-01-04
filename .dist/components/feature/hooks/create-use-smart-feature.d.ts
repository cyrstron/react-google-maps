import { CreateServiceFunction, FeatureService } from "./create-use-feature";
export declare const createUseSmartFeature: <Props, Service extends FeatureService<Props>>(createFeatureService: CreateServiceFunction<Props, Service>) => (props: Props) => void;
