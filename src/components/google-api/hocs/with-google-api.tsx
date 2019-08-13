import React, {ComponentType} from 'react';
import {GoogleApiCtxConsumer} from '../google-api';

export interface GoogleApiProps {
  googleApi: Google;
}

export const withGoogleApi = <Props extends {}>(
  Wrapped: ComponentType<GoogleApiProps & Props>
) => (props: Props) => (
  <GoogleApiCtxConsumer>
    {(googleApi) => googleApi && (
      <Wrapped 
        googleApi={googleApi}
        {...props}
      />
    )}
  </GoogleApiCtxConsumer>
);
