import { InfoWindowService } from "../services";
import { InfoWindowSettings } from "..";
export declare const useCreateInfoWindowCtx: (props: InfoWindowSettings) => void;
export declare const useInfoWindowCtx: () => InfoWindowService | undefined;
export declare const useDumbInfoWindow: (props: InfoWindowSettings) => InfoWindowService | undefined;
