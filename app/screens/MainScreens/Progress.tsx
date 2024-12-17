import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Tabs } from "expo-router";

const Progress: React.FC = () => {
 return (
  <View>
    <Text style = {styles.title}>
      Progress Updates
      Hiadv
    </Text>
  </View>

    
    
     
   );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 30,
        backgroundColor: '#F1F1F1',
    },
    title: {
        fontSize: 100,
        top: 200
    }
})
export default Progress;