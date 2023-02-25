// import Login from "./screens/Login";
import Messaging from "./screens/Messaging";
import Chat from "./screens/Chat";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup_EnterEmail from './SRC/Screens/Signup/Signup_EnterEmail';
// import Signup_EnterVerificationCode from './SRC/Screens/Signup/Signup_EnterVerificationCode';
import Login from './SRC/Screens/Signup/Login';
import Welcome from "./screens/Welcome";

//👇🏻 React Navigation configurations
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Welcome'
                    component={Welcome}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name='Login'
                    component={Login}
                    options={{ headerShown: false }} />
                <Stack.Screen name="Signup_EnterEmail" component={Signup_EnterEmail} options={{ headerShown: false }}/>
                {/* <Stack.Screen name="Signup_EnterVerificationCode" component={Signup_EnterVerificationCode} /> */}
                <Stack.Screen
                    name='Chat'
                    component={Chat}
                    options={{
                        title: "Chats",
                        headerShown: false, }}/>

                <Stack.Screen name='Messaging' component={Messaging} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}