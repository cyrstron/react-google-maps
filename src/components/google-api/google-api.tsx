import React, {Component, createContext, ReactNode} from 'react';
import {GoogleApiService} from './services/google-api.service';

export interface GoogleProps {
  apiKey: string;
  children: ReactNode;
}

export interface GoogleState {
  isPending: boolean;
  googleApi?: Google;
  err: Error | null;
}

const GoogleApiCtx = createContext<Google | undefined>(undefined);

export const GoogleApiCtxProvider = GoogleApiCtx.Provider;
export const GoogleApiCtxConsumer = GoogleApiCtx.Consumer;

export class GoogleApiProvider extends Component<GoogleProps, GoogleState> {
  googleService: GoogleApiService;

  constructor(props: GoogleProps) {
    super(props);

    const {apiKey} = props;

    this.googleService = new GoogleApiService(apiKey);

    this.state = {
      isPending: false,
      err: null,
      googleApi: undefined
    }
  }

  async componentDidMount() {
    this.setState({
      isPending: true,
    });

    try {
      const googleApi = await this.googleService.loadApi();

      this.setState({
        isPending: false,
        googleApi,
      });
    } catch (err) {
      this.setState({
        isPending: false,
        err,
      });
    }
  }

  render() {
    const {
      isPending,
      err,
      googleApi,
    } = this.state;

    const {
      children,
    } = this.props;

    if (isPending) return 'Loading...';

    if (err) return err.message;

    return (
      <GoogleApiCtxProvider
        value={googleApi}
      >
        {children}
      </GoogleApiCtxProvider>
    )
  }
}