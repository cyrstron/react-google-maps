import { InfoWindowService } from "../services";
import { InfoWindowSettings } from "..";
export declare const useInfoWindow: () => [InfoWindowService | undefined, (props: InfoWindowSettings) => void];
export declare const useUpdateInfoWindow: (props: InfoWindowSettings, setProps?: ((props: InfoWindowSettings) => void) | undefined) => void;
export declare const useSmartInfoWindow: (props: InfoWindowSettings) => InfoWindowService | undefined;
