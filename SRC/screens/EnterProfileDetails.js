import { StyleSheet, Text, Touchable, TouchableOpacity, View, TextInput } from 'react-native'
import React from 'react'
import { containerFull } from '../CommonCss/pagecss'
import{formbtn, formbtnSignup, formbtnLoginText, formbtnSignupText, formInput} from '../CommonCss/formcss'
import { SafeAreaView } from 'react-native-safe-area-context'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const EnterProfileDetails = ({navigation}) => {
  return (
    <KeyboardAwareScrollView>
        <SafeAreaView style={containerFull}>
            <View>
                <Text>
                    First Name
                </Text>
                <TextInput/>
            </View>

        </SafeAreaView>
    </KeyboardAwareScrollView>
 
    
  )
}


const styles = StyleSheet.create({

})
export default EnterProfileDetails
