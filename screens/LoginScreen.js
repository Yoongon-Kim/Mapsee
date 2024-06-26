import React,{useEffect, useState} from 'react'
import {StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Dimensions} from 'react-native'
import { auth } from '../firebase'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { height } = Dimensions.get('window');

const LoginScreen=({ navigation })=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [valid, setValid]=useState(false)

    useEffect(()=>{
        const unsubscribe=auth.onAuthStateChanged(user=>{
            if(user){
                //navigation.replace("AfterLogin")
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
            navigation.navigate("AfterLogin")
    }

    

    const ContinueButton=()=>{
        useEffect(()=>{
            if(email.length!==0){
                if(password.length!==0){
                    setValid(true);
                }
                else setValid(false);
            }
            else setValid(false);
        },[email,password])        
        if(valid){
            return(
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={handleLogin}
                        style={styles.button}
                        activeOpacity={0.6} 
                    >
                        <View style={{justifyContent:'center', alignItems:'center',}}>
                            <Text style={styles.buttonText}>계속하기</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }
        else{
            return(
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.invalidButton}
                    activeOpacity={0.6} 
                >
                    <View style={{justifyContent:'center', alignItems:'center',}}>
                        <Text style={styles.invalidButtonText}>계속하기</Text>
                    </View>
                </TouchableOpacity>
            </View>
            )
        }
    }

    return(
        <View style={styles.container}>
            <View style={{width:'100%',marginBottom:10}}>
                <Text style={styles.textContainer}>로그인</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={{fontSize:13,marginLeft:14}}>이메일</Text>
                <View style={{borderBottomColor:'#ADB1C5', borderBottomWidth:1,marginTop:5,paddingVertical:10,marginHorizontal:10}}>
                    <TextInput
                        placeholder="mapsee@happetite.com"
                        value={email}
                        onChangeText={text=>setEmail(text)}
                        style={styles.input}
                    />
                </View>
                <Text style={{fontSize:13,marginLeft:14, marginTop:20}}>비밀번호</Text>
                <View style={{borderBottomColor:'#ADB1C5', borderBottomWidth:1,marginTop:5,paddingVertical:10,marginHorizontal:10}}>
                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={styles.input}
                        secureTextEntry
                    />
                </View>
            </View>
            <ContinueButton/>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        height:height*1.1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'white',
    },

    textContainer:{
        fontWeight:'600',
        fontSize:20,
        marginBottom:20,
        alignItems:'flex-start',
        marginLeft:30,
    },

    inputContainer:{
        height:0.6*height,
        width:'90%',
    },

    input:{
        backgroundColor:'white',
        borderRadius: 10,        
    },

    buttonContainer:{
        width:'80%',
        justifyContent:'flex-end',
        alignItems:'center',
        marginTop:100,
    },

    button:{
        backgroundColor: '#00CCBD',
        width: '100%',
        padding:15,
        borderRadius:10,
    },

    invalidButton:{
        backgroundColor: 'white',
        width: '100%',
        padding:15,
        borderRadius:10,
        borderColor:'black',
        borderWidth:1,
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
    
    invalidButtonText:{
        color:'black',
        fontWeight:'700',
        fontSize:16,
    },

    buttonOutlineText:{
        color:'#0782F9',
        fontWeight:'700',
        fontSize:16,
    },


})