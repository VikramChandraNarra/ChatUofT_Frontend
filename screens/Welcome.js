import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { containerFull } from '../SRC/CommonCss/pagecss'
import{formbtn, formbtnSignup, formbtnLoginText, formbtnSignupText} from '../SRC/CommonCss/formcss'
import { SafeAreaView } from 'react-native-safe-area-context'


const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={containerFull}>
        <View style={styles.welcomScreenView}>
            <Text style={styles.welcomScreenText}>Welcome to ChatUofT</Text>
            <Text style={styles.welcomScreenText}>Will add a random prompt here every time they open the app</Text>
        </View>

            <TouchableOpacity style={formbtn} >
                <Text style={formbtnLoginText} onPress={() => (navigation.navigate("Login"))}> Log in </Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={formbtnSignup}> 
            <Text style={formbtnSignupText} onPress={() => navigation.navigate("Signup_EnterEmail")} >Sign up</Text>
            </TouchableOpacity>
    </SafeAreaView>
    
  )
}


const styles = StyleSheet.create({
    welcomScreenView:{
        marginTop: 300,
        justifyContent: 'space-between',
        fontsize:20
    },
    welcomScreenText:{
        fontSize: 20,
        padding: 10
    }
})

export default Welcome
