import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';  // Import StyleSheet
import {router} from 'expo-router';
import { useFonts } from 'expo-font';
import { Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const RegistrationScreen:React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const isLengthValid = password.length >= 9;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const isValidEmail = ()=> {
        const emailRegex =
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
      };
    const RegistrationComplete = () =>{
        if(passwordConfirm===password&&isValidEmail()){
            router.push(`/screens/MainScreens/Home`);
        }
        else if(passwordConfirm!=password){
            Alert.alert("Passwords don't match")
        }
        else if(!isValidEmail()){
            Alert.alert("Please enter a valid email")
        }
    }

   

    return (

        <View style={styles.container}>

            

            <Text style={styles.welcomeText}>Welcome!</Text>
            <Text style={styles.subText}>Please enter your email and password to sign in</Text>
            <View style={styles.inputBox}>
                <Text style={styles.EmailWord}>Email</Text>
                <View style={styles.inputContainer}>

                    <TextInput
                        style={styles.input}
                        placeholder="Provide your email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                </View>
                <Text style={styles.PasswordWord}>Enter a password</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    />
                </View>
                <Text style={styles.PasswordWord}>Confirm Password</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter password"
                        value={passwordConfirm}
                        onChangeText={setPasswordConfirm}
                        secureTextEntry={true}
                    />
                </View>
            </View>
            <View style={styles.passwordValidation}>
                {isLengthValid ? (
                    <FontAwesome name="check" size={18} color="green" />
                ) : (
                    <FontAwesome name="times" size={18} color="red" />
                )}
                <Text style={isLengthValid ? styles.validText : styles.invalidText}>
                    At least 9 characters
                </Text>
            </View>
            <View style={styles.passwordValidation}>
                {hasNumber ? (
                    <FontAwesome name="check" size={18} color="green" />
                ) : (
                    <FontAwesome name="times" size={18} color="red" />
                )}
                <Text style={hasNumber ? styles.validText : styles.invalidText}>
                    Contains at least one number
                </Text>
            </View>
            <View style={styles.passwordValidation}>
                {hasSpecialChar ? (
                    <FontAwesome name="check" size={18} color="green" />
                ) : (
                    <FontAwesome name="times" size={18} color="red" />
                )}
                <Text style={hasSpecialChar ? styles.validText : styles.invalidText}>
                    At least one special characters
                </Text>
            </View>
        
            
            <View style={styles.passwordValidation}>
                {hasUppercase ? (
                    <FontAwesome name="check" size={18} color="green" />
                ) : (
                    <FontAwesome name="times" size={18} color="red" />
                )}
                <Text style={hasUppercase ? styles.validText : styles.invalidText}>
                    Contains at least one upper case
                </Text>
            </View>
            

            
            
            <View style={styles.horizontalLine} />

            <TouchableOpacity style={styles.loginButton} onPress={() => RegistrationComplete()}>
                <Text style={styles.loginButtonText}  > 
                    Register
                </Text>
            </TouchableOpacity>

           


        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 30,
        backgroundColor: '#F1F1F1',
    },
    contentWrapper: {
        width: '100%',
        maxWidth: 400,
    },
    welcomeText: {
        fontSize: 30,
        height:44,
        top:-80,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'left',
      
    },
    subText: {
        fontSize: 17,
        color: '#3D3D3D',
        top: -70,
        marginBottom: 20,
     
    },
    EmailWord:
        {
            fontSize: 17,
            top:-140,
            color: '#3D3D3D',
            marginBottom: 20,
            
        },
    PasswordWord:
        {
            fontSize: 17,
            top:-140,
            color: '#3D3D3D',
            marginBottom: 20,
           
        },
    inputContainer: {
        marginBottom: 20,

        position: 'relative',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        top:-140,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 16,
    },
    eyeIcon: {
        position: 'absolute',
        right: 10,
        top: 15,
    },
    resetText: {
        color: '#007AFF',
        top:-100,
        textAlign: 'right',
        marginBottom: 20,
        
    },
    loginButton: {
        backgroundColor: '#2E24B5',
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
        height: 55,
        top:40,
        
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        
    },
    registerText: {
        color: '#5D5D5D',
        textAlign: 'center',
       
        fontSize: 17,
    },
    link: {
        color: '#0000FF',
        textDecorationLine: 'underline',
        alignItems:'center',
    },
    background: {
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: -1,  
      },
    navbar: {
        position: 'absolute',
        top: 100,
        left: 30,
      },
    bottom: {
        position: 'absolute',
        top: 760,
        left: 64,
      },
    inputBox: {
        top: 80,
    },
    middle: {
        position: 'absolute',
        top: 520,
        left: 150,
    },
    horizontalLine: {
        borderBottomColor: '#ccc', // Color of the line
        borderBottomWidth: 1,      // Thickness of the line
        width: '120%',             // Width of the line (can adjust as needed)
        marginVertical: 20,        // Space above and below the line
        top: 10,
        left: -30,
      },
      validText: {
        marginLeft: 8,
        color: 'green',
        fontSize: 14,
        fontFamily: 'Sora',
    },
    invalidText: {
        marginLeft: 8,
        color: 'red',
        fontSize: 14,
        fontFamily: 'Sora',
    },
    passwordValidation: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        top: 170,
    },
});


export default RegistrationScreen;