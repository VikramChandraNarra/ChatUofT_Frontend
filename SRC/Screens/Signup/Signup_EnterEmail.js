import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { containerFull, goback } from '../../CommonCss/pagecss'
import { MaterialIcons } from '@expo/vector-icons';
import UofT from '../../../assets/uoft.png';

import { formHead, formbtn, formInput } from '../../CommonCss/formcss';

const storeUsername = async (username, navigation) => {
    try {
        await AsyncStorage.setItem("username", username);
        navigation.navigate("Chat");
    } catch (e) {
        Alert.alert("Error! While saving username");
    }
};

const signupProcess = (email, password, utorId, navigation) => {
    fetch("http://localhost:4000/signup", {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password, 
            utorid: utorId,
        })
})
    .then(res => res.json()).then(
        data => {
            if (data.message === "please fill all the fields") {
                alert('Invalid Credentials')

            }else if (data.message === "user already exists") {
                navigation.navigate("Login")

                //Login Code
            }else if (data.message === "user added") {
                storeUsername(utorId, navigation)
                navigation.navigate("Chat")
            } else {
                alert("Backedn failed")
            }
        } 
    )
    .catch(error => {
        console.error('Error:', error);
    });

}
const Signup_EnterEmail = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [utorId, setUtorId] = useState('');
  return (
    <View style={containerFull}>
        <Image
            style={styles.image}
            source={UofT}
        />
       
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={goback}>

            <MaterialIcons name="arrow-back-ios" size={24} color="black" />
            <Text style={{
                color: 'black',
                fontSize: 16,
            }}

            >Go Back</Text>

        </TouchableOpacity>

        <Text style={formHead}>Create a new account</Text>
        <TextInput placeholder="Enter Your Email" 
        style={formInput} onChangeText={(text) => setEmail(text)}/>
        <TextInput placeholder="Enter Your UTORid" 
        style={formInput} onChangeText={(text) => setUtorId(text)}/>
        <TextInput placeholder="Enter Your Password" 
        style={formInput} onChangeText={(text) => setPassword(text)}/>


        <Text style={formbtn}
            onPress={() => signupProcess(email, password, utorId, navigation)}
        >
            Sign up!
        </Text>
        
      
    </View>
  )
}

export default Signup_EnterEmail

const styles = StyleSheet.create({
    image: {
        height: 400,
        width: 400,

    }
})