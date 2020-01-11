import { GoogleApiProps } from '../services/google-api-service';
export interface GoogleState {
    isPending: boolean;
    googleApi?: Google;
    err: Error | null;
}
export declare function useGoogleApi(props: GoogleApiProps): GoogleState;
