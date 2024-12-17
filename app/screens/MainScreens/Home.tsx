import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import {router} from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Tabs } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";
const Home: React.FC = () => {
 return (
  
  <View style = {styles.container}>
    <ImageBackground
    source={require("../../../assets/images/colorful-block-print-frame-beige-background.jpg")} // Replace with your image URL or local path
        style={styles.backgroundImage}
        resizeMode="cover">
    <View style = {styles.dashedBox}>
    <Text>
      Add a habit!
    </Text>
    </View>
   
    
    
  
  <TouchableOpacity style={styles.addButton} onPress={() => router.push('/screens/NewHabit')}>
      <Icon name= "plus" size ={20} color = "#fff"></Icon>
    </TouchableOpacity>
    </ImageBackground>
  </View>
    
    
     
   );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 30,
      backgroundColor: '#F1F1F1',
      position: 'relative'
  },
  title: {
      fontSize: 50,
      top: -280,
      left: 40
  },
  addButton: {
    backgroundColor: "#007bff", // Circle color
    borderRadius: 200,            // Ensures the button is circular
    padding: 15,
    top: 580,
    left:310,                 // Padding to make the circle bigger
    width: 50,                  // Width of the circle
    height: 50, 
    justifyContent: "center",    // Center the icon horizontally
    alignItems: "center",        // Center the icon vertically
    position: "absolute"
  },
  dashedBox: {
    borderWidth: 2,
    borderColor: '#007bff',   // Color of the dashed border
    borderStyle: 'dashed',    // Dashed border style
    width: 300,
    height: 100,
    top: -250,
    left: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  backgroundImage: {
    flex: 1, // Makes the background image fill the screen
    justifyContent: "center", // Centers content vertically
    alignItems: "center",     // Centers content horizontally
  }
})
export default Home;