import { useState, useEffect } from "react";
import { GoogleApiService } from "../services/google-api.service";

export interface GoogleState {
  isPending: boolean;
  googleApi?: Google;
  err: Error | null;
}

export function useGoogleApi(apiKey: string): GoogleState {  
  const [googleApi, setGoogleApi] = useState<Google | undefined>(undefined);
  const [err, setError] = useState<Error | null>(null);
  const [isPending, setIsPending] = useState<boolean>(true);

  async function loadApi() {
    const googleService = new GoogleApiService(apiKey);

    try {
      const googleApi = await googleService.loadApi();

      setGoogleApi(googleApi);
    } catch (err) {
      setError(err);
    } 

    setIsPending(false);
  }

  useEffect(() => {
    loadApi();
  }, [apiKey]);

  return {
    googleApi,
    err,
    isPending,
  }
}