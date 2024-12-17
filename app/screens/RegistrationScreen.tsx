import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';  // Import StyleSheet
import {router} from 'expo-router';
import { useFonts } from 'expo-font';



const RegistrationScreen:React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

   

    return (

        <View style={styles.container}>

            

            <Text style={styles.welcomeText}>Welcome back</Text>
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
            </View>
            

            <TouchableOpacity style={styles.middle}>
                <Text style={styles.registerText}>
                    Forgot Password?{' '}
                    <Text style={styles.link} onPress={() => router.push('/screens/MainScreens/Home')}>
                        Reset
                    </Text>
                </Text>
                
            </TouchableOpacity>
            
            <View style={styles.horizontalLine} />

            <TouchableOpacity style={styles.loginButton} onPress={() => router.push(`/screens/MainScreens/Home`)}>
                <Text style={styles.loginButtonText}  > 
                    Log In
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bottom}>
                <Text style={styles.registerText}>
                    Don't have an account?{' '}
                    <Text style={styles.link} onPress={() => router.push('/screens/MainScreens/Home')}>
                        Register
                    </Text>
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
        top:-30,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'left',
      
    },
    subText: {
        fontSize: 17,
        color: '#3D3D3D',
        top: -40,
        marginBottom: 20,
     
    },
    EmailWord:
        {
            fontSize: 17,
            top:-100,
            color: '#3D3D3D',
            marginBottom: 20,
            
        },
    PasswordWord:
        {
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
        height: 50,
        borderColor: '#ccc',
        top:-110,
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
        top:80,
        
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
        top: 50,
        left: -30,
      },
});


export default RegistrationScreen;