import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const CustomComponent = ({ text }) => <div><img src={require('../../images/marker-icon.png')} /></div>;
 
export default class GoogleMapComponent extends Component {
    static defaultProps = {
        center: {
            lat: 12.9352,
            lng: 77.6244
        },
        zoom: 11
    };
 
    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '80vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDTWAxQ7Z4GNC28ljvgSDBAmTiZ-eYiGog' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <CustomComponent
                        lat={12.9352}
                        lng={77.6244}
                        text="Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}