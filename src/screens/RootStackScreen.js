import { View, Text } from "react-native";
import React from "react";
import SplashScreen from "./SplashScreen";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const RootStack = createNativeStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator
    headerMode="none"
    screenOptions={{
      headerShown: false,
    }}
  >
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;