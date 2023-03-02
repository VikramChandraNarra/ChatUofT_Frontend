import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import React, { useState } from 'react'

import { containerFull, goback, hr80 } from '../CommonCss/pagecss'
import { MaterialIcons } from '@expo/vector-icons';

import { formHead, formInputm, formbtn, formInput, formTextLinkRight, formTextLinkCenter, formbtnSignup, formbtnSignupText, formbtnLoginText, formInputB } from '../CommonCss/formcss';

import UofT from '../../assets/uoft.png';

const loginPressed = ( email, password, navigation) => {
    //
    fetch("http://localhost:8000/login", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email,
                password: password, 
			})
    })
        .then(res => res.json()).then(
            data => {
                if (data.message === "please fill all the fields") {
                    alert('Invalid Credentials')

                }else if (data.message === "user exists") {
                    //Login Code
                    navigation.navigate("Chat")

                }else {
                    alert('User does not exist')
                }
            } 
        )
        .catch(error => {
            console.error('Error:', error);
        });
}

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (

    <View style={containerFull}>
        <Image
            style={styles.image}
            source={UofT}
        />

        
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')} style={goback}>
            <MaterialIcons name="arrow-back-ios" size={24} color="black" />
        </TouchableOpacity>
       
        <TextInput placeholder="Enter Your Email" style={formInput}
                onChangeText={(text) => setEmail(text)}
            />
        <TextInput placeholder="Enter Your Password" style={formInput}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
        />
            
        <TouchableOpacity style={formbtn}>
            <Text style={formbtnLoginText} onPress={() => loginPressed(email, password, navigation)}>
            Log in
            </Text>
        </TouchableOpacity>
        <View style={hr80}>
            <Text>or</Text>
        </View>
        
        <TouchableOpacity style={formbtnSignup}> 
            <Text style={formbtnSignupText} onPress={() => navigation.navigate("Signup")}>Sign up</Text>
        </TouchableOpacity>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    image: {
        marginTop: 60,
        height: 270,
        width: 270,

    }
})