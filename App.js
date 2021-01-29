import { StatusBar } from 'expo-status-bar';
import React, { Component }from 'react';
import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAkpNkHZbxzWRkwazWIVWv6eez2-u9e_Hk",
  authDomain: "instagram-clone-74267.firebaseapp.com",
  projectId: "instagram-clone-74267",
  storageBucket: "instagram-clone-74267.appspot.com",
  messagingSenderId: "586513146611",
  appId: "1:586513146611:web:0cbd64298d3ea2e1864d86",
  measurementId: "G-GVB4WKJXD6"
};

if (firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LandingScreen from './components/auth/landing'
import RegisterSreen from './components/auth/Register'





const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRoutename="landing">
    <Stack.Screen name = "landing" component = {LandingScreen} options = {{ headerShown: false }}/>
    <Stack.Screen name = "Register" component = {RegisterScreen} />

    </Stack.Navigator>

    </NavigationContainer>
  );
}

