import React, { ReactNode} from 'react';
import { useGoogleApi } from './hooks/use-google-api';
import { GoogleApiCtxProvider } from './hooks/use-google-ctx';

export interface GoogleProps {
  apiKey: string;
  children: ReactNode;
}

export interface GoogleState {
  isPending: boolean;
  googleApi?: Google;
  err: Error | null;
}

export const GoogleApiProvider = ({
  apiKey, 
  children
}: GoogleProps) => {
  const {
    isPending,
    err,
    googleApi
  } = useGoogleApi(apiKey);

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
