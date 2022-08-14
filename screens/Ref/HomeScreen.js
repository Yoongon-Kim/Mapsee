import { signOut } from 'firebase/auth'
import React from 'react'
import {StyleSheet, Text, Touchable, View,TouchableOpacity} from 'react-native'
import { auth } from '../firebase'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen=({navigation})=>{
    const gotoHomeScreen = () => {
        navigation.navigate("Login")
    }
    const handleSignOut=()=>{
        signOut(auth)
        .then(gotoHomeScreen)
        .catch(error=>alert(error.message))
    }
    const gotoFirstScreen=()=>{
        navigation.navigate("First")
    }

    return(
        <View style={styles.container}>
            <Text>Email: {auth.currentUser?.email}</Text>
            <TouchableOpacity
                onPress={()=>handleSignOut()}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Sign out</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>gotoFirstScreen()}
                style={styles.button}
            >
                <Text style={styles.buttonText}>go to first screen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    button:{
        backgroundColor: '#0782F9',
        width: '60%',
        padding:15,
        borderRadius:10,
        alignItems:'center',
        marginTop:40,
    },

    buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize:16,
    },
})