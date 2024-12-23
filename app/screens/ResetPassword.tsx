import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, Image, ActivityIndicator } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
const ResetPassword: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const [fontsLoaded] = useFonts({
        Sora: require('../../assets/fonts/Sora-VariableFont_wght.ttf'),
    });

    if (!fontsLoaded) {
        return null; // Return null or a loading screen until fonts are loaded
    }

    // Validation conditions
    const isLengthValid = password.length >= 9;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const matchPasswords = (password===confirmPassword)

    const handleContinuePress = () => {
        setShowPopup(true);
        
        // Simulate a delay for the loading icon, then redirect or close the modal
        setTimeout(() => {
            setShowPopup(false);
            console.log("Redirecting to Home...");
            // You can add your navigation logic here
        }, 2000); // 2 seconds delay for demonstration
    };

    return (
        <View style={styles.container}>

            <Image 
            source={require('../../assets/images/Navbar.png')} 
            style={styles.navbar}
            resizeMode="contain"
            />

            <Text style={styles.welcomeText}>Create new password</Text>
            <Text style={styles.subText}>Create your new password. If you forget it, then you have to do forget password</Text>
            
            <Text style={styles.EmailHeaderText}>New Password</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Provide password"
                    value={password}
                    onChangeText={setPassword}
                    keyboardType="email-address"
                />
            </View>
            
            <Text style={styles.EmailHeaderText}>Confirm New Password</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="EConfirm password"
                    value={confirmPassword}
                    onChangeText={setconfirmPassword}
                    secureTextEntry={true}
                />
            </View>

            {/* Password Validation Indicators */}
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
                {matchPasswords ? (
                    <FontAwesome name="check" size={18} color="green" />
                ) : (
                    <FontAwesome name="times" size={18} color="red" />
                )}
                <Text style={hasSpecialChar ? styles.validText : styles.invalidText}>
                    Password and Confirm Password must match
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

            <TouchableOpacity style={styles.loginButton} onPress={handleContinuePress}>
                <Text style={styles.loginButtonText}>Continue</Text>
            </TouchableOpacity>

            {/* Modal Popup */}
            <Modal
                transparent={true}
                visible={showPopup}
                animationType="fade"
                onRequestClose={() => setShowPopup(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Image
                            source={require('../../assets/images/notification_logo.png')}
                            style={styles.modalImage}
                            resizeMode="contain"
                        />
                        
                        <Text style= {styles.modalHeader}>Password Reset</Text>
                        <Text style= {styles.modalHeader}>Successful</Text>
                        <Text style={styles.modalText}>Redirecting,</Text>
                        <Text style={styles.modalText}>Please wait...</Text>
                        <View style={styles.activityIndicatorWrapper}>
                            <ActivityIndicator size="large" color="#4A00E0" style={styles.activityIndicator} />
                        </View>

                        
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingHorizontal: 30,
        backgroundColor: '#fff',
    },
    welcomeText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 25,
        marginBottom: 10,
        textAlign: 'left',
        fontFamily: 'Sora',
        top: 140,
    },
    subText: {
        fontSize: 17,
        color: '#888',
        fontFamily: 'Sora',
        top: 140,
    },
    EmailHeaderText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#888',
        marginBottom: 10,
        fontFamily: 'Sora',
        top: 160,
    },
    inputContainer: {
        marginBottom: 20,
        position: 'relative',
        top: 160,
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 16,
        fontFamily: 'Sora',
    },
    passwordValidation: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        top: 170,
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
    loginButton: {
        backgroundColor: '#2E24B5',
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
        height: 55,
        top: 300,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Sora',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 338,
        height: 480,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        marginTop: 15,
        fontSize: 16,
        color: '#333',
        fontFamily: 'Sora',
        alignItems: 'center'
    },
    modalHeader: {
        marginTop: 15,
        fontSize: 28,
        fontWeight: 700,
        color: '#333',
        fontFamily: 'Sora',
    },
    modalImage: {
        width: 163,
        height: 134,
        marginBottom: 10,
    },
    activityIndicatorWrapper:{
        marginTop: 25
    },
    activityIndicator: {
        transform: [{ scale: 1.2 }],
    },
    horizontalLine: {
        borderBottomColor: '#ccc', // Color of the line
        borderBottomWidth: 1,      // Thickness of the line
        width: '120%',             // Width of the line (can adjust as needed)       
        top: 270,
        left: -30,
      },
      navbar: {
        position: 'absolute',
        top: 100,
        left: 30,
      },
});

export default ResetPassword;