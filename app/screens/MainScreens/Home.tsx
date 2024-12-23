import React, {createContext, useState, useContext, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, ImageBackground, Modal, TextInput, FlatList } from 'react-native';
import { BlurView } from "expo-blur";
import {router} from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Tabs } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";
import DropDownPicker from 'react-native-dropdown-picker';
import CheckBox from 'react-native-check-box'
import DateTimePicker from '@react-native-community/datetimepicker';
import { DayPicker } from 'react-native-picker-weekday'
import PushNotification from 'react-native-push-notification';
import { useHabits } from './HabitContext';
interface Habit {
  id: number,
  HabitName: string,
  HabitType: string,
  HabitDone: boolean,
  HabitDate: Date,
  HabitDays: number[]
}

const Home: React.FC = () => {
  
  const [isVisibleHabitBuilder, setVisibleHabitBuilder] = useState(false);
  const {allHabitsDone, setAllHabitsDone} = useHabits();
  const [weekdays, setWeekdays] = useState<number[]>([])
  const [HabitN, setHabit] = useState("");
  const[HabitT, setHabitType] = useState("");
  const [currHabits, setcurrHabits] = useState<Habit[]>([]);
  const [open, setOpen] = useState(false);
  const [HabitD, setHabitDone] = useState(false);
  const [numHabitsDone, setnumHabitsDone] = useState(0);
  
  const [items, setItems] = useState([
    {label: 'Health', value: 'Health'},
    {label: 'Education', value: 'Education'},
    {label: 'Work', value: 'Work'},
    {label: 'Social', value: 'Social'},
    {label: 'Other', value: 'Other'},

  ]);
  const habitToImage = {
    Health: require("../../../assets/images/health-background.jpg"),
    Education: require("../../../assets/images/education-background.jpg"),
    Social: require("../../../assets/images/social-background.jpg"),
    Work: require("../../../assets/images/work-background.jpg"),
    Other: require("../../../assets/images/other-background.jpg")
  }

  const [date, setDate] = useState(new Date());
 const isCorrectDay = (HabitDays: number[]) => {
  const currentDay = new Date().getDay();
  //console.log(currentDay)
  if(HabitDays.includes(currentDay+1)){
   
    return true;
  }
  return false;
 }
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    
    
    setDate(currentDate);
    //console.log(date)
  };
  
  
  const addNewHabit = () =>{
    setcurrHabits ((prevHabits) => [ ...prevHabits, {id: prevHabits.length+1, HabitName: HabitN, HabitType: HabitT, HabitDone: false, HabitDate:date, HabitDays:weekdays},])
    checkAllHabitsDone(numHabitsDone, currHabits.length+1);
  };
  const deleteHabit = (id: number, HabitD: boolean) =>{
    
    if(HabitD){
      setnumHabitsDone(numHabitsDone - 1);
      checkAllHabitsDone(numHabitsDone-1, currHabits.length-1);
    }
    else{
      checkAllHabitsDone(numHabitsDone, currHabits.length-1);
    }

      setcurrHabits((prevHabits) =>prevHabits.filter((habit)=>(habit.id!=id)).map((habit) => 
        habit.id > id 
          ? { ...habit, id: habit.id - 1 } // Decrement id for habits after the deleted one
          : habit // Keep habits before the deleted one unchanged
      ));
      
      
  }
  
  const addHabitButtonHandler = () => {
    // Call multiple functions here
    setVisibleHabitBuilder(false);
    
    addNewHabit();
    
 
  };
  const changeHabitDoneCounter = (HabitD: boolean) => {
    setnumHabitsDone((prevNumHabitsDone) => {
      const newNumHabitsDone = HabitD ? prevNumHabitsDone - 1 : prevNumHabitsDone + 1;
      checkAllHabitsDone(newNumHabitsDone,currHabits.length); // Pass the updated value to checkAllHabitsDone
      return newNumHabitsDone;
    });
  }
  const checkAllHabitsDone = (numHabitsDone: number, HabitsLength: number) => {
    
    console.log(numHabitsDone, HabitsLength)
    if(HabitsLength===numHabitsDone){
      setAllHabitsDone(true);
    }
    else{
      setAllHabitsDone(false);
    }
    
  }

  const toggleHabitCheck = (id: number, HabitD: boolean) => {
    
    
    changeHabitDoneCounter(HabitD)
    
    setcurrHabits((prevHabits) => {
      const updatedHabits = prevHabits.map((habit) =>
        habit.id === id ? { ...habit, HabitDone: !habit.HabitDone } : habit
      );
      //console.log("Updated Habits:", updatedHabits);
      return updatedHabits;
    });

 
    
  };
  
  

 return (
  
  <View style = {styles.container}>
    <ImageBackground
    source={require("../../../assets/images/colorful-block-print-frame-beige-background-min.jpg")} // Replace with your image URL or local path
        style={styles.backgroundImage}
        resizeMode="cover">
    
    <FlatList
        data={currHabits}
        keyExtractor={(item: Habit) => item.id.toString()}
        renderItem={({ item }: { item: Habit }) => (
          <View style={[styles.dashedBox]}   >
            
            
            <ImageBackground source = {habitToImage[item.HabitType]}
            style = {styles.backgroundImage}
            resizeMode="cover"
            >
                      <View
                style={[
                  styles.overlay,
                  !isCorrectDay(item.HabitDays) && styles.darkenedOverlay, // Add darkened style conditionally
                ]}
              />
            <Text style = {styles.HabitBoxText} >{item.HabitName}</Text>
            
            <CheckBox
                style = {styles.HabitCheckBox}
                isChecked  = {item.HabitDone}
                onClick={() =>toggleHabitCheck(item.id, item.HabitDone)}
                
                
              />
              
              <Text>{}</Text>
              
            <Button title="Delete" onPress={() => deleteHabit(item.id, item.HabitDone)} />
            </ImageBackground>
          </View>
          
        )}
        
       // contentContainerStyle={styles.boxContainer}
      />
    
    
  
  <TouchableOpacity style={styles.addButton} onPress={() => setVisibleHabitBuilder(true)}>
      <Icon name= "plus" size ={20} color = "#fff"></Icon>
    </TouchableOpacity>

    <Modal
    animationType="fade" // Animation for opening/closing the popup
    transparent={true} // Allows the modal background to be transparent
    visible={isVisibleHabitBuilder} // Controls visibility
    onRequestClose={() => setVisibleHabitBuilder(false)} // Android back button
    
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
                          <Text style = {styles.HabitSelectionText}>Habit Type</Text>
                          <View style={styles.inputContainer}>
                              
                          <View style={{  position:'relative'}}>
                            <DropDownPicker
                             
                            style={styles.HabitTypeDropDown}
                            open={open}
                            value={HabitT}
                            items={items}
                            setOpen={setOpen}
                            setValue={setHabitType}
                            setItems={setItems}
                            dropDownContainerStyle={{
                              transform: [{ translateY: -90 }], // Move dropdown menu closer
                          }}
                              dropDownDirection = "BOTTOM"
                              />
                            </View>
                            </View>
                            
                            <View style={styles.inputContainer}>
                            <Text style = {styles.NotificationSelectionText}>Notification Time:</Text>
                          <DateTimePicker
                          style = {styles.NotificationSelector}
                          value = {date}
                          
                          mode = {"time"}
                          is24Hour={true}
                          onChange={onChange}
                          />
                  </View>
                  <Text style = {styles.DaySelectionText}>Select Habit Days</Text>
                 <DayPicker
                 
                  weekdays={weekdays}
                  setWeekdays={setWeekdays}
                  activeColor='violet'
                  textColor='white'
                  inactiveColor='grey'
                 // dayTextStyle = {{/*All styles applicable to text component*/}}  //(optional for high styling flexiblity)
                  itemStyles ={styles.DaySelector}     //(optional for high styling flexiblity)
                  //wrapperStyles ={{/*All Styles applicable to View component*/}}  // (optional for high styling flexiblity)  
                />
                 

                          
                          <TouchableOpacity style = {styles.HabitSubmitButton} onPress={() => addHabitButtonHandler()}>
                          
                            <Text> Create Habit!</Text>
                          </TouchableOpacity>
                              
                         
         
          
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
  darkeneddasheBox:{
    backgroundColor: '#2e7d32'
  }
  ,
  backgroundImage: {
    flex: 1, // Makes the background image fill the screen
    justifyContent: "center", // Centers content vertically
    alignItems: "center",     // Centers content horizontally
    width: '99.9%',
    borderRadius: 10,
    overflow: "hidden"
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
    top:-65,
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
  top: -60,
  fontSize: 17
},
HabitTypeDropDown:{
  height: 5,
    borderColor: '#ccc',
    top:-65,
    width:250,
    marginTop: 20,
    marginBottom:-10,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    zIndex: 10,
    position:'relative',
    justifyContent: 'flex-start', 
    
    
    
},
HabitSubmitButton:{
  height: 50,
    borderColor: '#ccc',
    top:60,
    width:250,
    marginTop: 0,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    alignItems: "center",
    justifyContent:'center',
    backgroundColor: 'green'
},
HabitCheckBox:{
  top:-15,
  left: 155
},
NotificationSelectionText:{
top: 15,
left: -60,
fontSize: 17
},
NotificationSelector:{
  top:-10,
  left:80
},
DaySelectionText:{
  top:30,
  fontSize:17
},
DaySelector:{
  top:10
},
overlay: {
  ...StyleSheet.absoluteFillObject, // Makes the overlay cover the entire image
  backgroundColor: 'rgba(0, 0, 0, 0)', // Transparent by default
},
darkenedOverlay: {
  backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent black for darkening
},
HabitBoxText:{
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 25,
  top: 30

}

})
export default Home;
