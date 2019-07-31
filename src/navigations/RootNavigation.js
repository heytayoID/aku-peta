import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation"

import MyMaps from './../screens/MyMaps'
import MyCalenders from './../screens/MyCalenders'

const App = createStackNavigator({
	MyMaps : {
		screen : MyMaps,
		navigationOptions : ({navigation}) => ({
			header : null
		})
	},
	MyCalenders : {
		screen : MyCalenders,
		navigationOptions : ({navigation}) => ({
			header : null
		})
	}
},
{
	initialRouteName : 'MyCalenders'
})

const RootNavigation = createAppContainer(createSwitchNavigator({
	App : App
},
{
	initialRouteName : 'App',
	resetOnBlur : true
}))

export default RootNavigation