import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {router} from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Tabs } from "expo-router";

const NewHabit: React.FC = () => {
 return (
  
  <View style ={styles.container}>
    <Text style = {styles.HabitType}>
      New Habit
    </Text>
    <View style = {styles.inputContainer}>
      <TextInput style = {styles.input} placeholder="Enter password"/>
    </View>
    <TouchableOpacity style = {styles.createHabitButton} onPress={() => router.push('/screens/MainScreens/Home')}>
      <Text>
        Create Habit
      </Text>
    </TouchableOpacity>

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
    fontSize: 17,
    top:-100,
    color: '#3D3D3D',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
    
    position: 'relative',
},
input: {
  height: 40,
  borderColor: "gray",
  borderWidth: 1,
  borderRadius: 5,
  width: "100%",
  paddingHorizontal: 10,
  backgroundColor: "white",
  position: "relative"
},
  welcomeText: {
    fontSize: 30,
    height:44,
    top:30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
    color: 'blue'
  
},
createHabitButton: {
  backgroundColor: '#2E24B5',
  paddingVertical: 15,
  borderRadius: 25,
  alignItems: 'center',
  height: 55,
  top:80
}
  
});
