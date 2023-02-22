import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React, { useState } from 'react'

import { containerFull, goback, hr80 } from '../../CommonCss/pagecss'
import { MaterialIcons } from '@expo/vector-icons';

import { formHead, formInputm, formbtn, formInput, formTextLinkRight, formTextLinkCenter } from '../../CommonCss/formcss';

import UofT from '../../../assets/uoft.png';

const loginPressed = ( email, password, navigation) => {
    //
    fetch("http://localhost:4000/login", {
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
       
       <Text style={formHead}>Login</Text>
            <TextInput placeholder="Enter Your Email" style={formInput}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput placeholder="Enter Your Password" style={formInput}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
            />
            



        <Text style={formbtn} onPress={() => loginPressed(email, password, navigation)}
        >
            Submit!
        </Text>
        

        <View style={hr80}></View>


            <Text style={formTextLinkCenter}>New to ChatUofT? 
            <Text style={{ color: 'black' }} onPress={() => navigation.navigate("Signup_EnterEmail")}>Sign up</Text>
            </Text>

      
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    image: {
        height: 400,
        width: 400,

    }
})