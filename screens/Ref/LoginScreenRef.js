import React,{useEffect, useState} from 'react'
import {StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native'
import { auth } from '../firebase'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, onValue, set, push, remove, off } from 'firebase/database';
// import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBxfwiwG1FLmUIu4-mJkKlL3T5TEzFEJjc",
//   authDomain: "mapsee-login.firebaseapp.com",
//   projectId: "mapsee-login",
//   storageBucket: "mapsee-login.appspot.com",
//   messagingSenderId: "9089617503",
//   appId: "1:9089617503:web:4b9e4184c01fd9474e55ea"
// };

// // Initialize Firebase
// // let app;
// // if(firebase.apps.length===0){
// //     app=firebase.initializeApp(firebaseConfig);
// // }
// // else{
// //     app=firebase.app()
// // }

// // const auth =firebase.auth()
// // export {auth};

// const app= initializeApp(firebaseConfig);
// const auth=getAuth(app)

const LoginScreenRef=({ navigation })=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    useEffect(()=>{
        const unsubscribe=auth.onAuthStateChanged(user=>{
            if(user){
                navigation.replace("Home")
            }
        })

        return unsubscribe
    },[])

    const handleSignUp=()=>{
        createUserWithEmailAndPassword(auth, email,password)
            .then(userCredentials=>{
                const user=userCredentials.user;
                console.log(user.email);
            })
            .catch(error=>alert(error.message))
    }

    const handleLogin=()=>{
        signInWithEmailAndPassword(auth, email,password)
            .then(userCredentials=>{
                const user =userCredentials.user;
                console.log('Logged in with', user.email);
            })
            .catch(error=>alert(error.message))
    }

    return(
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text=>setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry={true}
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default LoginScreenRef

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    },

    inputContainer:{
        width:'80%'
    },

    input:{
        backgroundColor:'white',
        paddingHorizontal: 15,
        paddingVertical:10,
        borderRadius: 10,
        marginTop:5,
    },

    buttonContainer:{
        width:'60%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,
    },

    button:{
        backgroundColor: '#0782F9',
        width: '100%',
        padding:15,
        borderRadius:10,
    },

    buttonOutline:{
        backgroundColor:'white',
        marginTop:5,
        borderColor:'#0782F9',
        borderWidth:2,
    },

    buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize:16,
    },

    buttonOutlineText:{
        color:'#0782F9',
        fontWeight:'700',
        fontSize:16,
    },


})