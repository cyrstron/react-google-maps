import { extendGoogleApi } from './utils/extentions';
import { buildUrlString } from './utils/build-url-string';

declare global {
  interface Window {
    google: Google;
  }
}

export interface GoogleApiOptions {
  apiKey: string;
  geometry?: boolean;
  drawing?: boolean;
  places?: boolean;
  visualization?: boolean;
  proxy?: string;
  language?: string;
  region?: string;
  version?: string;
}

export interface GoogleApiProps extends GoogleApiOptions {
  custom?: boolean;
  extend?: (googleApi: Google) => void;
}

export class GoogleApiService {
  url: string;
  custom: boolean;
  extend?: (googleApi: Google) => void;

  constructor({
    extend,
    custom = true,
    ...options
  }: GoogleApiProps) {
    this.url = buildUrlString(options);

    this.custom = custom;
    this.extend = extend;
  }

  loadApi(): Promise<Google> {
    if (window.google) return Promise.resolve(window.google);

    const script: HTMLScriptElement = document.createElement('script');
    script.type = 'text/javascript';
    script.src = this.url;

    document.body.append(script);

    return new Promise<Google>((res, rej) => {
      script.addEventListener('load', () => {     
        const {google} = window;

        extendGoogleApi(google);

        res(google);
      });

      script.addEventListener('error', (): void => {
        rej(new Error('Failed to load resource'));
      });
    });
  }

  extendApi(google: Google): void {
    if (!this.custom) return;

    extendGoogleApi(google);

    if (!this.extend) return;

    this.extend(google);
  }
}
