import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { containerFull, goback } from '../../CommonCss/pagecss'
import { formbtn, formHead3, formInput } from '../../CommonCss/formcss'
import { MaterialIcons } from '@expo/vector-icons';

const Signup_EnterVerificationCode = ({navigation}) => {
  return (
    <View style={containerFull}>
            <TouchableOpacity onPress={() => navigation.navigate('Signup_EnterEmail')} style={goback}>

                <MaterialIcons name="arrow-back-ios" size={24} color="gray" />
                <Text style={{
                    color: 'gray',
                    fontSize: 16,
                }}

                >Go Back</Text>

            </TouchableOpacity>

            {/* <Image source={logo} style={logo1} /> */}
            <Text style={formHead3}>
                A verification code has been sent to your email
            </Text>
            <TextInput placeholder="Enter 6-Digit Code here" style={formInput}

                onChangeText={(text) => setVerificationCode(text)}
            />

            <Text style={formbtn}
            onPress={() => navigation.navigate
            ('Signup_ChooseUsername')}
            >
            Next
            </Text>
        </View>
  )
}

export default Signup_EnterVerificationCode