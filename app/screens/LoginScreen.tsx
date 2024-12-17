import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';  // Import StyleSheet
import {router} from 'expo-router';
import { useFonts } from 'expo-font';

const LoginScreen: React.FC = () => {
 return (
  <View>
    <TouchableOpacity>
    <Text style = {styles.container} onPress={() => router.push('/screens/MainScreens/Home')}>
        Click Meukgukgu!
    </Text>
    </TouchableOpacity>
  </View>

    
    
     
   );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize:30,
        justifyContent: 'center',
        paddingHorizontal: 30,
        backgroundColor: '#F1F1F1',
    }
})
export default LoginScreen;
