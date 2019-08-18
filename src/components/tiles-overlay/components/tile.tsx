import {Component, ReactNode} from 'react';

export interface TileProps {
    width: number,
    height: number,
    zoom: number,
    tileCoord: google.maps.Point,
    children: (props: {
        width: number,
        height: number,
        zoom: number,
        tileCoord: google.maps.Point,
    }) => ReactNode;
}

export class Tile extends Component<TileProps, {}> {
    shouldComponentUpdate(nextProps: TileProps) {
        const {
            width,
            height,
            zoom,
            tileCoord: {x, y},
        } = this.props;

        return x !== nextProps.tileCoord.x || 
          y !== nextProps.tileCoord.y || 
          zoom !== nextProps.zoom || 
          width !== width || 
          height !== height;
    }

    render() {
        const {children, ...props} = this.props;

        return children(props);
    }
}