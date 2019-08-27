import {Component, ReactNode} from 'react';
import {createPortal} from 'react-dom';
import {CreateServiceProps} from './hocs/with-full-overlay-ctx';

export type CustomOverlayProps = google.custom.CustomOverlayOptions & {
  children?: ReactNode;
};

export type FullCutomOverlayProps = CustomOverlayProps & CreateServiceProps;

export class CustomOverlay extends Component<FullCutomOverlayProps, {}> {
  componentDidMount() {
    const {
      overlayService,
      createOverlayService,
      children,
      ...overlayOptions
    } = this.props;

    createOverlayService(overlayOptions);
  }

  componentDidUpdate({
    overlayService: _overlayService,
    createOverlayService: _createOverlayService,
    children: _children,
    ...prevProps
  }: FullCutomOverlayProps) {
    const {
      overlayService,
      createOverlayService,
      children,
      ...props
    } = this.props;

    if (!overlayService) return;

    overlayService.updateOptions(prevProps, props);
  }

  componentWillUnmount() {
    const {
      overlayService,
    } = this.props;

    if (!overlayService) return;

    overlayService.remove();    
  }

  render() {
    const {children, overlayService} = this.props;

    if (!overlayService) return null;

    const container = overlayService.getContainer();

    if (!container) return null;

    return createPortal(children || null, container);
  }
}
