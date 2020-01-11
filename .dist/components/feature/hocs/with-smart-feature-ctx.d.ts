import React from 'react';
import { FeatureService, CreateServiceFunction } from '../hooks/create-use-feature';
export interface FeatureServiceProps<Service> {
    service?: Service;
}
export interface CreateFeatureProps<Props> {
    setProps: (props: Props) => void;
}
export declare const FeatureCtx: React.Context<any>;
export declare const CreateFeatureCtx: React.Context<((props: any) => void) | undefined>;
export declare const FeatureConsumer: React.Consumer<any>;
export declare const CreateFeatureConsumer: React.Consumer<((props: any) => void) | undefined>;
export declare const withSmartFeatureCtx: <Props, Service extends FeatureService<Props>>(createService: CreateServiceFunction<Props, Service>) => <WrappedProps extends {}>(Wrapped: React.ComponentType<WrappedProps>) => (props: WrappedProps) => JSX.Element;
