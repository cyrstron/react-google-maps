import React from 'react';
export interface GoogleApiProps {
    googleApi: Google;
}
export declare const withGoogleApi: <Props extends {}>(Wrapped: React.ComponentType<GoogleApiProps & Props>) => (props: Props) => JSX.Element | null;
