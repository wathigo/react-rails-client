import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from 'react';
import { connect } from 'react-redux';
import Actions from '../actions';
import { bindActionCreators } from 'redux';


const mapStyles = {
  width: '100%',
  height: '100%'
};


export class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    const { properties } = this.props;
    console.log(properties)
    const markers = properties.map(property => {
      return (<Marker
        onClick={this.onMarkerClick}
        name={property.name}
        position={{lat: property.latt, lng: property.long}}
      />)
    })
    return (
      <Map
        google={this.props.google}
        zoom={2}
        style={mapStyles}
        initialCenter={{ lat: -1.2884, lng: 36.8233 }}
      >

      {markers}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}

        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}



export default GoogleApiWrapper({
  apiKey: (process.env.API_KEY)
})(MapContainer)
