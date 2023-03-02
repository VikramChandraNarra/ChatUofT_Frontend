import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChatScreen from '../src/screens/ChatScreen';
import ContactsScreen from '../src/screens/ContactsScreen';
// import MainTabNavigator from '../../navigation/MainTabNavigator';
import MainTabNavigator from '../navigation/MainTabNavigator.js';
import Login from '../src/screens/Login';
import Welcome from '../src/screens/Welcome';
import Signup from '../src/screens/Signup';
import EnterProfileDetails from '../src/screens/EnterProfileDetails';


const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'whitesmoke' } }}>
        {/* <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} /> */}
        <Stack.Screen name="EnterProfileDetails" component={EnterProfileDetails} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={MainTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Chat" component={ChatScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Contacts" component={ContactsScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
