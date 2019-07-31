import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import {styles} from './styles.js'

class MyMaps extends Component {
  state = {
    region: {
      latitude: -6.3164643825140985,
      longitude: 106.6482881270349,
      latitudeDelta: 0.0065288809190189369,
      longitudeDelta: 0.0065315003752708435,
    },
    markers: [
        {
            "id": 0,
            "name": "mawar",
            "coordinate": {
                "longitude": 106.64677049964666,
                "latitude": -6.31629592931006
            }
        }, {
            "id": 1,
            "name": "melati",
            "coordinate": {
                "longitude": 106.6499650105834,
                "latitude": -6.314788345274963
            }
        },{
            "id": 2,
            "name": "kamboja",
            "coordinate": {
                "longitude": 106.65026843547821,
                "latitude": -6.318779567792185
            }
        },{
            "id": 3,
            "name": "tulip",
            "coordinate": {
                "longitude": 106.64684191346169,
                "latitude": -6.314220834055488
            }
        },{
            "id": 4,
            "name": "anggrek",
            "coordinate": {
                "longitude": 106.64755571633577,
                "latitude": -6.319311417445766
            }
        }
    ],


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
          region={this.state.region}
          onLongPress={data => console.log(data.nativeEvent)}
          onPoiClick={data => this.handleMapPress(data)}
          onRegionChangeComplete={region => this.handleRegionChange(region)}
        >
          {
            this.state.markers.map(marker => (
                <Marker
                  title={marker.name}
                  coordinate={marker.coordinate}
                  key={marker.id}
                > 
                  <View style={{backgroundColor:"#ff5555",width:30,height:30,justifyContent:'center',alignItems:'center'}}>
                    <Icon name={"bed"} color={"#fff"} size={20}/>
                  </View>
                </Marker>
            ))
          }
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
   
        filterReverseGeocodingByTypes={[]} 
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