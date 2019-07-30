import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex:1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    flex:1,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
    bottom: 20
  },
  searchBarWrapper: {
    backgroundColor: 'rgba(255,255,255,1)',
    position: 'absolute',
    height: 50,
    margin: 10,
    padding: "auto",
    borderRadius: 5,
    borderWidth: .3,
    top: 0,
    right: 0,
    left: 0,
  },
  searchBar: {
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