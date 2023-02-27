// import Login from "./screens/Login";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigator from './navigation'

export default function App() {
    return (
    <View style={styles.container}>
        <Navigator />
            
        <StatusBar style="auto" />
    </View>

    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'whitesmoke',
      justifyContent: 'center',
    },
  });
  