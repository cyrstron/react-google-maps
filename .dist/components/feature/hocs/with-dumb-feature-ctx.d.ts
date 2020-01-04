import React from 'react';
import { FeatureService } from '../hooks/create-use-feature';
export declare const withDumbFeatureCtx: <Props, Service extends FeatureService<Props>>() => <WrappedProps extends {}>(Wrapped: React.ComponentType<WrappedProps & {
    service: Service;
}>) => (props: WrappedProps) => JSX.Element | null;
