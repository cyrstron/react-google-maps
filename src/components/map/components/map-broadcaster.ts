import {useEffect} from 'react';
import { withDumbMapCtx } from '../hocs/with-dumb-map-ctx';
import { MapService } from '../services';
import { MapEventsProps, MapHandlerName, MapEventHandler } from '..';

const MapBroadcasterComponent = ({
    mapService, 
    ...props
}: MapEventsProps & {
    mapService: MapService
}) => {
    useEffect(() => {
        const eventKeys = Object.keys(props) as MapHandlerName[];

        eventKeys.forEach((eventName) => {
            mapService.addHandler(
                eventName as MapHandlerName,
                props[eventName] as MapEventHandler,
            );
        });

        return () => {
            eventKeys.forEach((eventName) => {
                mapService.removeHandler(
                    eventName as MapHandlerName,
                    props[eventName] as MapEventHandler,
                );
            });
        }
    }, []);

    return null;
}

export const MapBroadcaster = withDumbMapCtx<MapEventsProps>(MapBroadcasterComponent);