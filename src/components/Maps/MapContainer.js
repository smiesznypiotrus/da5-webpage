import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
class MapContainer extends Component {
    render() {
        var map = <Map
            google={this.props.google}
            zoom={16}
            initialCenter={{
                lat: 51.749558,
                lng: 19.458952
            }}
            style={{ width: "100%", height: "100%" }}>
            <Marker position={{ lat: 51.749542, lng: 19.458950 }} />
        </Map>

        return (
            <>
                {map}
            </>
        );
    }
}
export default GoogleApiWrapper({
    apiKey : "AIzaSyB1fYku9DTBChnSux8QLws3wbSjXNIP3lY"
})(MapContainer);