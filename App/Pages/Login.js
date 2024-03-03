import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Color from '../Shared/Color';

import { Ionicons } from '@expo/vector-icons';

export default function Login() {
    return (
        <View style={styles.login}>
            <Image
                source={require('./../Assets/Image/loginPage.png')}
                style={{ /* borderRadius: 25, */ width: '100%' }} />
            <View style={styles.container}>
                
                <Text style={styles.welcomeText}>
                    Welcome to Education Application
                </Text>

                <Text style={styles.loginText}>Login/Signup</Text>

                <View style={styles.button}>
                    <Ionicons 
                        name='logo-google' 
                        size={24} 
                        color='white'
                        style={{marginRight: 10}} />
                    <Text style={{color: Color.white, fontSize: 20,}}>Sign In with Google</Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        paddingTop: 80,
        marginTop: -20,
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        width: '100%',
    },

    login: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },

    welcomeText: {
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    loginText: {
        textAlign: 'center',
        marginTop: 80,
        fontSize: 22,
    },

    button: {
        backgroundColor: Color.primary,
        padding: 10,
        margin: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }
});