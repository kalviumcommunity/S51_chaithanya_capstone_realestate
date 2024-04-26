import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class GoogleMap extends Component {
  render() {
    const mapStyles = {
      width: '100%',
      height: '400px',
    };

    return (
      <div>
        <h2>Location: Casagrand Linore</h2>
        <div style={mapStyles}>
          <Map
            google={this.props.google}
            zoom={14}
            initialCenter={{ lat: 12.9716, lng: 77.5946 }} // Specify the initial center for the map
          />
        </div>
      </div>
    );
  }
}

// Replace 'YOUR_GOOGLE_MAPS_API_KEY_HERE' with your actual API key
export default GoogleApiWrapper({
  apiKey: 'YOUR_GOOGLE_MAPS_API_KEY_HERE'
})(GoogleMap);
