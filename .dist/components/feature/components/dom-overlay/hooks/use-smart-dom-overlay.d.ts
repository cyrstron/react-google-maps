import { DomOverlayService } from '../services';
export declare const useDomOverlay: () => [DomOverlayService | undefined, (props: google.custom.DomOverlayOptions) => void];
export declare const useUpdateDomOverlay: (props: google.custom.DomOverlayOptions, setProps?: ((props: google.custom.DomOverlayOptions) => void) | undefined) => void;
export declare const useSmartDomOverlay: (props: google.custom.DomOverlayOptions) => DomOverlayService | undefined;
