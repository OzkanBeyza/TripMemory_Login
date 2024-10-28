import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import {NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreateAccount from './pages/CreateAccount';
import forgetPassword from './pages/forgetPassword';

const Stack = createNativeStackNavigator();
function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Login" > 
      {/* initialRouteName = "CreateAccount"  */}
        <Stack.Screen name = "Login" component = {Login}/>
        <Stack.Screen name = "CreateAccount" component = {CreateAccount} />
        <Stack.Screen name = "HomeScreen" component = {Home} />
        <Stack.Screen name = "forgetPassword" component= {forgetPassword}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;


