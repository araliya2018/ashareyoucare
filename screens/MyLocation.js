import React from 'react';
import { Text, View, StyleSheet,Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
export default class MyLocation extends React.Component {
  state = {
    mapRegion: null,
    hasLocationPermissions: false,
    locationResult: null, 
     latitude: 37.78825, 
     longitude: -122.4324

  };

  componentDidMount() {
    this._getLocationAsync();
  }

  _handleMapRegionChange = mapRegion => {
    console.log(mapRegion);
    this.setState({ mapRegion });

  };

  _getLocationAsync = async () => {
   const  { status } = await Permissions.askAsync(Permissions.LOCATION);
   if (status !== 'granted') {
     this.setState({
       locationResult: 'Permission to access location was denied',
     });
   } else {
     this.setState({ hasLocationPermissions: true });
   }

   const location = await Location.getCurrentPositionAsync({});
   this.setState({ locationResult: JSON.stringify(location) });
   // Location: {this.state.locationResult}
   // Center the map on the location we just fetched.
    this.setState({mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }});
    this.setState({ latitude: location.coords.latitude});
    this.setState({ longitude: location.coords.longitude});
     
  };

  render() {
    return (
      <View style={styles.container}>
        
       
        
       
        <MapView
          style={styles.mapStyle}
          region={this.state.mapRegion}
          onRegionChange={this.handleMapRegionChange}
       
         
            
       
       />
        <MapView.Marker
            coordinate={{latitude: this.state.latitude,
              longitude:this.state.longitude,}}
            title="My Marker"
            description="Some description"
        />
      </View>
   
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
}); 