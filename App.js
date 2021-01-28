import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './components/auth/landing';


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRoutename="landing">
    <Stack.Screen name = "landing" component = {LandingScreen} options = {{ headerShown: false }}/>

    </Stack.Navigator>

    </NavigationContainer>
  );
}

