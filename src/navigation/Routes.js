import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from './AuthStack';
import MainStack from './MainStack'

const Stack = createNativeStackNavigator();

export default function Routes() {
  const isToken=true;
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      {/* <Stack.Screen name="Auth" component={AuthStack}/> */}
      {isToken ? <Stack.Screen name="main" component={MainStack}/> : <Stack.Screen name="Auth" component={AuthStack}/>}


    </Stack.Navigator>
  );
}