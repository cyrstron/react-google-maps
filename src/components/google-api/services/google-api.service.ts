import { extendGoogleApi } from './utils/extentions';

declare global {
  interface Window {
    google: Google;
  }
}

export class GoogleApiService {
  constructor(private apiKey: string) {}

  loadApi(): Promise<Google> {
    if (window.google) return Promise.resolve(window.google);

    const script: HTMLScriptElement = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://maps.google.com/maps/api/js?key=${this.apiKey}`;
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
    extendGoogleApi(google);
  }
}
