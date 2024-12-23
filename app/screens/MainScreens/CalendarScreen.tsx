import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, ImageBackground, Modal, TextInput, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Tabs } from "expo-router";
import { Calendar, CalendarList, Agenda,LocaleConfig } from "react-native-calendars";
import { useHabits } from './HabitContext';
const CalendarScreen: React.FC = () => {
  const [selectedDate, setselectedDate] = useState("");
const {allHabitsDone, setAllHabitsDone} = useHabits();
const today = new Date();
const formattedDate = today.toLocaleDateString('en-CA');
 return (
  <View style = {styles.container}>

      <Text >
        Select ate: {allHabitsDone? 'Y' : 'N'}
        
      </Text>
    <Calendar 
        style={styles.CalendarObject}
        onDayPress={(day) => {
          setselectedDate(day.dateString)
        }}
        markedDates={{
          [formattedDate]: {  selected: allHabitsDone, selectedColor: "orange"}
        }}
        theme={{
          selectedDayBackgroundColor: "blue",
          todayTextColor: "red",
          arrowColor: "blue",
          
        }}
      />
  </View>

    
    
     
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
      
    backgroundColor: '#F1F1F1',
    position: 'relative'
  },
  CalendarObject:{
    
    height:600
  }
})
export default CalendarScreen;