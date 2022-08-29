import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity,Text,Dimensions } from 'react-native';
import { auth } from '../firebase'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

const { height } = Dimensions.get('window');

const FirstScreen=({navigation})=>{

    useEffect(()=>{
        const unsubscribe=auth.onAuthStateChanged(user=>{
            if(user){
                navigation.replace("AfterLogin",user.email)
            }
        })

        return unsubscribe
    },[])

    const gotoEmailScreen=()=>{
        navigation.navigate("Login")
    }
    const gotoRegisterScreen=()=>{
        navigation.navigate("Register")
    }

    return(
        <View style={{height:height*1.1, backgroundColor:'white',alignItems:'center', justifyContent:'center',}}>
            <View style={{padding:height*0.3,marginBottom:height*0.2}}>
                <Image
                style={{alignItems:'center', justifyContent:'center'}}
                source={require('../assets/mapsee_logo.png')}
                />
            </View>
            <TouchableOpacity
                onPress={()=>gotoEmailScreen()}
                style={styles.button}
            >
                <Text style={styles.buttonText}>로그인</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>gotoRegisterScreen()}
                style={styles.registerButton}
            >
                <Text style={styles.registerButtonText}>이메일로 회원가입</Text>
            </TouchableOpacity>
        </View>
        
    );
}

export default FirstScreen

const styles = StyleSheet.create({
    container:{
        height:height*1.1,
        justifyContent:'center',
        alignItems:'center'
    },

    button:{
        backgroundColor: '#00CCBD',
        width: '90%',
        padding:10,
        borderRadius:10,
        alignItems:'center',
        marginTop:15,
    },

    registerButton:{
        backgroundColor: 'white',
        width: '90%',
        padding:10,
        borderRadius:10,
        alignItems:'center',
        borderColor:'black',
        borderWidth:1,
        marginTop:15,
    },

    buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize:16,
    },
    
    registerButtonText:{
        color:'black',
        fontWeight:'700',
        fontSize:16,
    }
})