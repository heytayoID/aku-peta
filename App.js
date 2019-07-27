import React,{Component} from 'react'
import {View, Text, TextInput, StyleSheet,Alert} from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

let id = 0
class App extends Component {
  state = {
    region : {
      latitude: -6.3164643825140985,
      longitude: 106.6482881270349,
      latitudeDelta: 0.0004288809190189369,
      longitudeDelta: 0.0004315003752708435,
    },
    marker : {
      coordinate : {   
        longitude: 106.64824672043324,
        latitude: -6.316456218159012
      },
      name : "Meteor Inovasi Digital .PT"
    },
  }
  randomColor = () => {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  handleMapPress = (data) => {
    this.setState({
      marker : {
        coordinate: data.nativeEvent.coordinate,
        name : data.nativeEvent.name
      },
      region : {
        latitude: data.nativeEvent.coordinate.latitude,
        longitude: data.nativeEvent.coordinate.longitude,
        latitudeDelta: this.state.region.latitudeDelta,
        longitudeDelta: this.state.region.longitudeDelta,
      }
    })
  }

  handleRegionChange = (region) => {
    this.setState({
      region : region
    })
  }

  render() {
    return (
        <View style={styles.container}>
            <MapView
               provider={PROVIDER_GOOGLE}
               style={styles.map}
               initialRegion={this.state.region}
               onLongPress={data => this.handleMapPress(data)}
               onPoiClick={data => this.handleMapPress(data)}
               onRegionChangeComplete={region => this.handleRegionChange(region)}
            >
              <Marker
                title={this.state.marker.name}
                coordinate={this.state.marker.coordinate}
              />
           </MapView>

             <View style={[styles.searchBarWrapper]}>
              <TextInput placeholder={"Temukan ..."} placeholderTextColor={"#aaa"} style={styles.searchBar}/>
             </View>

             <View style={[styles.bubble, styles.latlng]}>
                <Text style={styles.centeredText}>
                  {this.state.region.latitude.toPrecision(7)},
                  {this.state.region.longitude.toPrecision(7)}
                </Text>
              </View>

         </View>
      )
  }
}

export default App

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    bubble: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
        bottom:20
    },
    searchBarWrapper : {
      backgroundColor: 'rgba(255,255,255,1)',
      position: 'absolute',
      height : 50,
      margin:10,
      padding:"auto",
      borderRadius:5,
      borderWidth:.3,
      top : 0,
      right: 0,
      left : 0,
    },
    searchBar : {
      fontSize: 18,
    },
    latlng: {
        width: 200,
        alignItems: 'stretch',
    },
    button: {
        width: 100,
        paddingHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
    },
    buttonText: {
        textAlign: 'center',
    },
    centeredText: {
        textAlign: 'center'
    },
});