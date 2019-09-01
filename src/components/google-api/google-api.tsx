import React, { ReactNode} from 'react';
import { useGoogleApi } from './hooks/use-google-api';
import { GoogleApiCtxProvider } from './hooks/use-google-ctx';
import { GoogleApiOptions } from './services/google-api-service';

export interface GoogleProps extends GoogleApiOptions {
  children: ReactNode;
}

export interface GoogleState {
  isPending: boolean;
  googleApi?: Google;
  err: Error | null;
}

export const GoogleApiProvider = ({
  children,
  ...props
}: GoogleProps) => {
  const {
    isPending,
    err,
    googleApi
  } = useGoogleApi(props);

  if (isPending) return <div>Loading...</div>;

  if (err) return <div>{err.message}</div>;

  return (    
    <GoogleApiCtxProvider
      value={googleApi}
    >
      {children}
    </GoogleApiCtxProvider>
  )
}
