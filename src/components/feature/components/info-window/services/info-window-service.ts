import {MapService} from '../../../../map';
import { infoWindowEventNames } from './event-names';
import { groupInfoWindowProps } from './group-info-window-props';
import {
  InfoWindowEventName, 
  InfoWindowEventHandler,
  InfoWindowHandlerName,
  InfoWindowProps,
  InfoWindowSettings
} from '..';
import { MapsEventableObjectService } from '../../../../../services/maps-eventable-object';

export class InfoWindowService extends MapsEventableObjectService<
  google.maps.InfoWindow,
  InfoWindowEventName,
  InfoWindowSettings,
  InfoWindowEventHandler,
  InfoWindowHandlerName
> {
  mapService: MapService;

  constructor(
    google: Google,
    mapService: MapService, {
      anchor,
      ...props
    }: InfoWindowProps
  ) {    
    super(
      google, 
      new google.maps.InfoWindow(props),
      groupInfoWindowProps({
        anchor,
        ...props
      }), 
      infoWindowEventNames, 
      groupInfoWindowProps
    );

    const container = document.createElement('div');

    container.style.width = '100%';
    container.style.height = '100%';

    this.object.setContent(container);
    this.object.open(mapService.getObject(), anchor);

    this.mapService = mapService;
  }

  unmount() {
    this.object.close();

    super.unmount();
  }

  hide() {    
    this.object.close();
  }

  show() {    
    this.object.open(this.mapService.getObject(), this.options.anchor);
  }

  setOptions(props: InfoWindowSettings | undefined) {
    if (!props) return;

    const {anchor} = props;

    if ('anchor' in props) {
      this.object.open(this.mapService.getObject(), anchor);
    }

    super.setOptions(props);
  }

  getContainer(): Element {
    return this.object.getContent() as Element;
  }
}
