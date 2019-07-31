import React, { Component } from 'react'
import {View, Text} from 'react-native'

import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars'

class MyCalenders extends Component {
	state = {
		markedDates : {}
	}
	onDayPress = (day) => {
		let markedDate = {}
		let { markedDates } = this.state

		if(markedDates[day.dateString]) {
			delete markedDates[day.dateString]
		}else{	
			markedDate[day.dateString] = {
					selected: true,
					selectedColor:'blue'
			}
		}

		this.setState({
			markedDates : {
				...markedDates,
				...markedDate
			}
		})
	}
	render() {
		return (
			<View>
				<CalendarList
				  horizontal={true}
				  pagingEnabled={true}
				  calendarWidth={320}
				  onDayPress={(day) => this.onDayPress(day)}
				  markedDates={
				  	this.state.markedDates
				  }
				/>
				<Text>{JSON.stringify(this.state.markedDates)}</Text>
			</View>

		)
	}
}

export default MyCalenders


