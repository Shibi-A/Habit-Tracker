import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, ImageBackground, Modal, TextInput, FlatList } from 'react-native';
import { BlurView } from "expo-blur";
import {router} from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Tabs } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";

interface Habit {
  id: number,
  HabitName: string
}
const Home: React.FC = () => {
  const [isVisible, setVisible] = useState(false);
  const [HabitN, setHabit] = useState("");
  const [currHabits, setcurrHabits] = useState<Habit[]>([]);
  const addNewHabit = () =>{
    setcurrHabits ((prevHabits) => [ ...prevHabits, {id: prevHabits.length+1, HabitName: HabitN},])
  };
  const deleteHabit = (id: number) =>{
      setcurrHabits((prevHabits) =>prevHabits.filter((habit)=>(habit.id!=id)))
  }
  const addHabitButtonHandler = () => {
    // Call multiple functions here
    setVisible(false);
    addNewHabit();
 
  };
 
 return (
  
  <View style = {styles.container}>
    <ImageBackground
    source={require("../../../assets/images/colorful-block-print-frame-beige-background.jpg")} // Replace with your image URL or local path
        style={styles.backgroundImage}
        resizeMode="cover">
    
    <FlatList
        data={currHabits}
        keyExtractor={(item: Habit) => item.id.toString()}
        renderItem={({ item }: { item: Habit }) => (
          <View style={[styles.dashedBox, { backgroundColor: 'white' }]}>
            <Text >{item.HabitName} {item.id}</Text>
            <Button title="Delete" onPress={() => deleteHabit(item.id)} />
          </View>
          
        )}
       // contentContainerStyle={styles.boxContainer}
      />
    
    
  
  <TouchableOpacity style={styles.addButton} onPress={() => setVisible(true)}>
      <Icon name= "plus" size ={20} color = "#fff"></Icon>
    </TouchableOpacity>

    <Modal
    animationType="fade" // Animation for opening/closing the popup
    transparent={true} // Allows the modal background to be transparent
    visible={isVisible} // Controls visibility
    onRequestClose={() => setVisible(false)} // Android back button
    
    >
      <BlurView intensity={50} style={styles.blurView}>
      <View style = {styles.CreateHabit}>
            <Text style = {styles.HabitSelectionText}>Habit Name</Text>
                  <View style={styles.inputContainer}>
                      <TextInput style={styles.input}
                                value={HabitN}
                                onChangeText={setHabit}
                      />
                          </View>
                          <Text style = {styles.HabitSelectionText}>Enter a password</Text>
                          <View style={styles.inputContainer}>
                              <TextInput
                                  style={styles.input}
                                  
                                  
                                 
                              />
                          </View>
         
          <Button title="Close" onPress={() => addHabitButtonHandler()}/> 
      </View>
      </BlurView>
    </Modal>
    </ImageBackground>
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
  title: {
      fontSize: 50,
      top: -280,
      left: 40
  },
  addButton: {
    backgroundColor: "#007bff", // Circle color
    borderRadius: 200,            // Ensures the button is circular
    padding: 15,
    top: 600,
    left:330,                 // Padding to make the circle bigger
    width: 50,                  // Width of the circle
    height: 50, 
    justifyContent: "center",    // Center the icon horizontally
    alignItems: "center",        // Center the icon vertically
    position: "absolute"
  },
  dashedBox: {
    borderWidth: 2,
    borderColor: '#007bff',   // Color of the dashed border
    borderRadius: 10,
    width: 350,
    height: 100,
    top: -10,
    left: 0,
    marginTop:20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  backgroundImage: {
    flex: 1, // Makes the background image fill the screen
    justifyContent: "center", // Centers content vertically
    alignItems: "center",     // Centers content horizontally
  },
  CreateHabit: {
    width:330,
    height: 640,
    top: -10,
    left: 0,
    borderRadius: 20,
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center'
  },
  blurView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Adds a darker overlay with transparency
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    top:-110,
    width:250,
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 16,
},
inputContainer: {
  marginBottom: 20,

  position: 'relative',
},
HabitSelectionText:{
  top: -100,
  fontSize: 17
}

})
export default Home;