import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation"

import MyMaps from './../screens/MyMaps'

const App = createStackNavigator({
	MyMaps : {
		screen : MyMaps,
		navigationOptions : ({navigation}) => ({
			header : null
		})
	}
},
{
	initialRouteName : 'MyMaps'
})

const RootNavigation = createAppContainer(createSwitchNavigator({
	App : App
},
{
	initialRouteName : 'App',
	resetOnBlur : true
}))

export default RootNavigation