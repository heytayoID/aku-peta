import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import {styles} from './styles.js'

class MyMaps extends Component {
  state = {
    region: {
      latitude: -6.3164643825140985,
      longitude: 106.6482881270349,
      latitudeDelta: 0.0004288809190189369,
      longitudeDelta: 0.0004315003752708435,
    },
    marker: {
      coordinate: {
        longitude: 106.64824672043324,
        latitude: -6.316456218159012
      },
      name: "Meteor Inovasi Digital .PT"
    },
    displaySearchListView : "flex"
  }

  handleMapPress = (data) => {
    this.setState({
      marker: {
        coordinate: data.nativeEvent.coordinate,
        name: data.nativeEvent.name
      },
      region: {
        latitude: data.nativeEvent.coordinate.latitude,
        longitude: data.nativeEvent.coordinate.longitude,
        latitudeDelta: this.state.region.latitudeDelta,
        longitudeDelta: this.state.region.longitudeDelta,
      }
    })
  }

  handleRegionChange = (region) => {
    this.setState({
      region: region
    })
  }

  handleClickSearchResult = (details,data) => {
    this.setState({
      marker: {
        coordinate:{
          latitude : details.geometry.location.lat,
          longitude :  details.geometry.location.lng
        },
        name: details.description
      },
      region: {
        latitude: details.geometry.location.lat,
        longitude: details.geometry.location.lng,
        latitudeDelta: this.state.region.latitudeDelta,
        longitudeDelta: this.state.region.longitudeDelta,
      },
      displaySearchListView : 'none'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          showsUserLocation={true}
          userLocationAnnotationTitle={"My Location"}
          showsMyLocationButton={true}
          initialRegion={this.state.region}
          region={this.state.region}
          onLongPress={data => this.handleMapPress(data)}
          onPoiClick={data => this.handleMapPress(data)}
          onRegionChangeComplete={region => this.handleRegionChange(region)}
        >
          <Marker
            title={this.state.marker.name}
            coordinate={this.state.marker.coordinate}
          />
        </MapView>

        
        <GooglePlacesAutocomplete
        placeholder='Search'

        minLength={2} 
        autoFocus={false}
        returnKeyType={'search'} 
        listViewDisplayed='auto'    
        fetchDetails={true}
        renderDescription={row => row.description} 
        onPress={(data, details = null) => {
          this.handleClickSearchResult(details, data)
        }}
        
        getDefaultValue={() => ''}
        
        query={{
          
          key: 'AIzaSyCwzfYKXyOtA9WnkWUC2q1ryxW0e7ndGYs',
          language: 'en', 
          types: '(cities)' 
        }}
        nearbyPlacesAPI='GooglePlacesSearch' 
        GoogleReverseGeocodingQuery={{
          
        }}
        GooglePlacesSearchQuery={{
          
          rankby: 'distance',
          types: 'food'
        }}
   
        filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} 
        predefinedPlaces={[]}
   
        debounce={200} 
        styles={{
          container: {
          position : "absolute",
          top:10,
          left:10,
          right:10,
          },
        textInputContainer: {
          backgroundColor: 'rgba(0,0,0,0)',
          borderTopWidth: 0,
          borderBottomWidth:0,
          height: 50,
        },
        textInput: {
          marginLeft: 0,
          marginRight: 0,
          height: 50,
          backgroundColor:"rgba(250,250,250,.9)",
          color: '#5d5d5d',
          fontSize: 16,
          borderRadius:10,
        },
        predefinedPlacesDescription: {
          color: '#1faadb'
        },
        poweredContainer:{
          display: 'none'
        },
        listView : {
          display : this.state.displaySearchListView
        }
      }}
      currentLocation={false}
      />

        <View style={[styles.bubble, styles.latlng]}>
          <Text style={styles.centeredText}>
            {this.state.region.latitude.toPrecision(7)},{this.state.region.longitude.toPrecision(7)}
          </Text>
        </View>
      </View>
    )
  }
}

export default MyMaps