import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Tabs } from "expo-router";

const NewHabit: React.FC = () => {
 return (
  
  <View style ={styles.container}>
    <Text style = {styles.welcomeText}>
      New Habit
    </Text>

  </View>

    
    
     
   );
}
export default NewHabit;
const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 30,
      backgroundColor: '#F1F1F1',
  },
  HabitType: {
    
  },
  welcomeText: {
    fontSize: 30,
    height:44,
    top:30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
    color: 'blue'
  
}
  
});
